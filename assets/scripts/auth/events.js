'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');
// const app = require('../app-data');
//
// let playerOne;
// let playerTwo;

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event){
    event.preventDefault();
  // two users
    let data = getFormFields(this);
    // playerOne = app.user;
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    console.log(data);
    // let data = getFormFields(this);
    // playerTwo = app.user;
    // authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    // console.log(data);
  });
  $('#sign-out').on('click', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
};


module.exports = {
  addHandlers,
};
