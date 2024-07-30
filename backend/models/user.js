const bcrypt = require('bcryptjs');
const validator = require('validator');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [18, 'Максимальная длина 18 символов'],
    unique: [true, 'Пользователь с таким email уже есть'],
    validate: {
      validator: validator.isEmail,
      message: 'Недопустимый адрес электронной почты',
    },
  },
  password: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
    select: false,
  },
  firstName: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [18, 'Максимальная длина 18 символов'],
  },
  familyName: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [18, 'Максимальная длина 18 символов'],
  },
  dateOfBirth: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [20, 'Максимальная длина 20 символов'],
  },
  country: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [18, 'Максимальная длина 18 символов'],
  },
  occupation: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [18, 'Максимальная длина 18 символов'],
  },
  phoneNumber: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
  socialMediaInst: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
  socialMediaTeleg: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
  avatar: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
  life: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
  education: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
  career: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
  competences: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
  hobbies: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
  news: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль!'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);