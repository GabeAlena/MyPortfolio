const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  login,
  createUser,
  returnUser,
  getUser,
  updateUser,
  updateAvatarUser,
} = require('../controllers/users');

userRouter.post('/SignUp', createUser);
userRouter.post('/SignIn', login);

userRouter.get('/me', returnUser);
userRouter.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24),
  }),
}), getUser);

userRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    firstName: Joi.string().min(2).max(18),
    familyName: Joi.string().min(2).max(18),
    dateOfBirth: Joi.string().min(2).max(20),
    country: Joi.string().min(2).max(18),
    occupation: Joi.string().min(2).max(18),
    phoneNumber: Joi.string().min(2).max(20)/*.pattern(/^\+\d{1,3}\d{9}$/)*/,
    socialMediaInst: Joi.string(),
    socialMediaTeleg: Joi.string(),
    //avatar: Joi.string().optional(),
  }),
}), updateUser);

userRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string(),
  }),
}), updateAvatarUser);
//userRouter.patch('/me/avatar', updateAvatarUser);

module.exports = userRouter;