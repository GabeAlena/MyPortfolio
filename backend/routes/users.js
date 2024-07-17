const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const multer = require('multer');
const path = require('path');
const auth = require('../middlewares/auth');

const {
  login,
  createUser,
  returnUser,
  getUser,
  getUserById,
  updateUser,
  updateAvatarUser,
} = require('../controllers/users');

userRouter.post('/SignUp', createUser);
userRouter.post('/SignIn', login);

userRouter.get('/me', auth, returnUser);
userRouter.get('/:userId', auth, celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24),
  }),
}), getUser);

userRouter.get('/portfolio/:userId', getUserById);
userRouter.get('/news/:userId', getUserById);

userRouter.patch('/me', auth, celebrate({
  body: Joi.object().keys({
    firstName: Joi.string().min(2).max(18),
    familyName: Joi.string().min(2).max(18),
    dateOfBirth: Joi.string().min(2).max(20),
    country: Joi.string().min(2).max(18),
    occupation: Joi.string().min(2).max(18),
    phoneNumber: Joi.string().allow('', null),
    socialMediaInst: Joi.string().allow('', null),
    socialMediaTeleg: Joi.string().allow('', null),
    avatar: Joi.string(),
    life: Joi.string().allow('', null),
  }),
}), updateUser);

// Настройка хранилища для загрузки файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //путь относительно корня проекта
    cb(null, path.join(__dirname, '../uploads/avatars'));
  },
  filename: function (req, file, cb) {
    if (!req.user || !req.user._id) {
      return cb(new Error('User not authenticated'));
    }
    cb(null, `${req.user._id}-${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

userRouter.patch('/me/avatar', auth, upload.single('avatar'), celebrate({
  body: Joi.object().keys({
    avatar: Joi.string(),
  }),
}), updateAvatarUser);

/*userRouter.patch('/me/life', auth, celebrate({
  body: Joi.object().keys({
    life: Joi.string(),
  })
}))*/

module.exports = userRouter;