const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const User = require('../models/user');
const ValidationError = require('../errors/ValidationError');
const Conflict = require('../errors/Conflict');
const NotFound = require('../errors/NotFound');
const Unauthorized = require('../errors/Unauthorized');

/* создание пользователя */
module.exports.createUser = (req, res, next) => {
  const {
    firstName, familyName, email, password, avatar, dateOfBirth, country, occupation, phoneNumber, socialMediaInst, socialMediaTeleg
  } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new Conflict('Такой пользователь уже зарегистрирован');
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({
      firstName,
      familyName,
      email,
      password: hash,
      avatar,
      dateOfBirth,
      country,
      occupation,
      phoneNumber,
      socialMediaInst,
      socialMediaTeleg,
    }))
    .then((user) => {
      res.status(201).send({
        firstName: user.firstName,
        familyName: user.familyName,
        email: user.email,
        _id: user.id,
        avatar: user.avatar,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
        occupation: user.occupation,
        phoneNumber: user.phoneNumber,
        socialMediaInst: user.socialMediaInst,
        socialMediaTeleg: user.socialMediaTeleg,
      });
    })
    .catch((err) => {
      console.error('Error occurred while creating user:', err);
      if (err.name === 'ValidationError') {
        return next(new ValidationError(`Данные некорректны: ${err.message}`));
      }
      // Обработка остальных ошибок
      return next(err);
    })
    .catch(next);
};

/* контроллер, который получает из запроса почту и пароль и проверяет их */
module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'SECRET_KEY',
        { expiresIn: '7d' },
      );

      res.send({
        token,
        firstName: user.firstName,
        familyName: user.familyName,
        email: user.email,
        _id: user.id,
        avatar: user.avatar,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
        occupation: user.occupation,
        phoneNumber: user.phoneNumber,
        socialMediaInst: user.socialMediaInst,
        socialMediaTeleg: user.socialMediaTeleg,
      });
    })

    .catch((err) => {
      if (err.name === 'Error') {
        next(new Unauthorized('Неверные почта или пароль'));
      }
    });
};

/* Получение информации о текущем пользователе */
module.exports.returnUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFound('Пользователь не найден!');
      }
      return res.send({
        firstName: user.firstName,
        familyName: user.familyName,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
        occupation: user.occupation,
        phoneNumber: user.phoneNumber,
        socialMediaInst: user.socialMediaInst,
        socialMediaTeleg: user.socialMediaTeleg,
        email: user.email,
        _id: user._id,
        avatar: user.avatar,
      });
    })
    .catch((err) => {
      next(err);
    });
};

/* возвращение всех пользователей */
module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.send({ data: users });
    })
    /* users */
    .catch((err) => next(err));
};

/* возвращение пользователя по _id */
module.exports.getUser = (req, res, next) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new NotFound('Запрашиваемый пользователь не найден');
      }
      res.send({
        firstName: user.firstName,
        familyName: user.familyName,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
        occupation: user.occupation,
        phoneNumber: user.phoneNumber,
        socialMediaInst: user.socialMediaInst,
        socialMediaTeleg: user.socialMediaTeleg,
        _id: user.id,
        avatar: user.avatar,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError(`Данные некорректны ${err.message}. Проверьте id пользователя`));
        return;
      }
      next(err);
    });
};

/* обновляет профиль */
module.exports.updateUser = (req, res, next) => {
  console.log('Request body:', req.body); // Add this line for debugging

  const { 
    firstName, 
    familyName, 
    dateOfBirth, 
    country, 
    occupation, 
    phoneNumber, 
    socialMediaInst, 
    socialMediaTeleg,
    avatar,
  } = req.body;
  const userId = req.user._id;

  User.findByIdAndUpdate(
    userId, 
    { firstName, familyName, dateOfBirth, country, occupation, phoneNumber, socialMediaInst, socialMediaTeleg, avatar }, 
    { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new NotFound('Запрашиваемый пользователь не найден');
      }
      console.log('User updated:', user); // Add this line for debugging
      console.log(userId);
      return res.send({
        firstName: user.firstName,
        familyName: user.familyName,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
        occupation: user.occupation,
        phoneNumber: user.phoneNumber,
        socialMediaInst: user.socialMediaInst,
        socialMediaTeleg: user.socialMediaTeleg,
        email: user.email,
        _id: user._id,
        avatar: user.avatar,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError(`Данные некорректны ${err.message}`));
        return;
      }
      next(err);
    });
};

/* обновляет аватар */
module.exports.updateAvatarUser = (req, res, next) => {
  console.log(`req.file:`, req.file);
  //const { avatar } = req.body;
  const userId = req.user._id;

  /*if (!avatar) {
    return res.status(400).send({ message: 'No image provided' });
  }*/

  if (!req.file) {
    return res.status(400).send({ message: 'No image provided' });
  }

  // Использование относительного пути для хранения в базе данных
  //const avatarUrl = path.join(__dirname, 'uploads/avatars/', req.file.filename);
  const avatarUrl = `http://localhost:3002/uploads/avatars/${req.file.filename}`;
  console.log(req.file.filename);
  console.log(`avatarUrl:`, avatarUrl);
  // Обновление пути к аватару в базе данных
    User.findByIdAndUpdate(userId, { avatar: avatarUrl }, { new: true, runValidators: true })
      .then((user) => {
        if (!user) {
          throw new NotFound('Запрашиваемый пользователь не найден');
        }
        return res.send({
          firstName: user.firstName,
          familyName: user.familyName,
          dateOfBirth: user.dateOfBirth,
          country: user.country,
          occupation: user.occupation,
          phoneNumber: user.phoneNumber,
          socialMediaInst: user.socialMediaInst,
          socialMediaTeleg: user.socialMediaTeleg,
          avatar: user.avatar,
          _id: user._id,
          email: user.email,
        });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError(`Данные некорректны ${err.message}`));
        return;
      }
      next(err);
    });
};