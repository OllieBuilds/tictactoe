'use strict';

const app = require('../app-data');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log('You signed in');
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess
};
