'use strict';

const app = require('../app-data.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
};

const signOutSuccess = () => {
  app.user = null;
  console.log('You successfully logged out.');
};

const checkUser = function checkUser () {
  if (app.user) {
    console.log('logged in');
  } else {
    console.log('no user');
  }
};

checkUser();

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  checkUser,
};
