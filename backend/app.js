//require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors, celebrate, Joi } = require('celebrate');
const cors = require('cors');
const path = require('path');

const userRouter = require('./routes/users');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { serverError } = require('./errors/serverError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { NotFound } = require('./errors/NotFound');

const { PORT = 3002 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/myportfoliodb', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  family: 4 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

/*app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));*/

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
  origin: [
    'https://localhost:3000', // Разрешаем запросы с этого домена
    'http://localhost:3000',
    'https://localhost:3001',
    'http://localhost:3001',
    'https://localhost:3002',
    'http://localhost:3002',
    'https://web.postman.co',
  ],
  credentials: true,
}));

app.use(requestLogger);

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', req.headers.origin);
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.status(200).send();
});

app.use('/uploads/avatars', express.static(path.join(__dirname, 'uploads/avatars')));

app.post('/SignUp', celebrate({
  body: Joi.object().keys({
    firstName: Joi.string().min(2).max(18).optional(),
    familyName: Joi.string().min(2).max(18).optional(),
    avatar: Joi.string().optional(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }).unknown(true),
}/*, {
  abortEarly: false,
  allowUnknown: true,
  maxBytes: 50 * 1024 * 1024,
}*/), createUser);
app.post('/SignIn', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    //email: Joi.string().required().email().pattern(new RegExp('^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z]{2,}$')),
    password: Joi.string().required(),
  }).unknown(true),
}), login);

app.use('/users', auth, userRouter);

app.use('*', (req, res, next) => next(new NotFound('Запрашиваемая страница не найдена')));

app.use(errorLogger);

app.use(errors());

app.use(serverError);

app.listen(PORT, () => {
  console.log(`Сервер на порту ${PORT} успешно запущен`);
});
