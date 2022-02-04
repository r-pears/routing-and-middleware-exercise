const express = require('express');
const app = express();
const itemRoutes = require('./routes/items');
const CustomError = require('./customError');

app.use(express.json());
app.use('/items', itemRoutes);

app.use(function (req, res, next) {
  return new CustomError('Not found', 404);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;