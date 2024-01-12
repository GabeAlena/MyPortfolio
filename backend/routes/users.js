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

userRouter.patch('/me', updateUser);
/*userRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    firstName: Joi.string().min(2).max(18),
    familyName: Joi.string().min(2).max(18),
    dateOfBirth: Joi.string().min(2).max(20),
    country: Joi.string().min(2).max(18),
    occupation: Joi.string().min(2).max(18),
    phoneNumber: Joi.string().min(2).max(20),
    socialMediaInst: Joi.string().url(),
    socialMediaTeleg: Joi.string(),
  }),
}), updateUser);*/

userRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(/^https?:\/\/(www\.)?[a-zA-Z\0-9]+\.[\w\d\-._~:/?#[\]@!$&'()*+,;=]{2,}#?/),
  }),
}), updateAvatarUser);
//userRouter.patch('/me/avatar', updateAvatarUser);

module.exports = userRouter;