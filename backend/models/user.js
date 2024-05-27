const bcrypt = require('bcryptjs');
const validator = require('validator');
const mongoose = require('mongoose');
//const root = '';

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
    default: 'Cat',
  },
  familyName: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [18, 'Максимальная длина 18 символов'],
    default: 'Big',
  },
  dateOfBirth: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [20, 'Максимальная длина 20 символов'],
    default: '18 dec 1995',
  },
  country: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [18, 'Максимальная длина 18 символов'],
    default: 'russia',
  },
  occupation: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [18, 'Максимальная длина 18 символов'],
    default: 'engineer',
  },
  phoneNumber: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [20, 'Максимальная длина 20 символов'],
    default: '+79876543210',
  },
  socialMediaInst: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    /*minlength: [0, 'Минимальная длина 0 символов'],
    maxlength: [40, 'Максимальная длина 40 символов'],
    default: 'https://instagram.com',*/
  },
  socialMediaTeleg: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    /*minlength: [0, 'Минимальная длина 0 символов'],
    maxlength: [40, 'Максимальная длина 40 символов'],*/
    /*default: 'https://t.me/',*/
  },
  avatar: {
    type: String,
    required: [false, 'Необязательное поле для заполнения'],
    /*default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',*/
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