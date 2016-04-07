'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');
let gameArray = require('../gameplay');
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
  });

  $('#sign-in-two').on('submit', function (event){
    event.preventDefault();
  // two users
    let data = getFormFields(this);
    // playerOne = app.user;
    authApi.signInTwo(authUi.signInSuccessTwo, authUi.failure, data);
    console.log(data);
  });

  $('#sign-out').on('click', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  // Game functions
  $('#new-game').on('submit', function(event){
    event.preventDefault();
    authApi.newGame(authUi.newGameSuccess, authUi.failure);
  });

  $('#change-password').on('submit', function(event){
    event.preventDefault();
    authApi.updateGame(authUi.success, authUi.failure);
    let data = getFormFields(this);
    authApi.changePassword(authUi.pwSuccess, authUi.failure, data);
  });



};


module.exports = {
  addHandlers,
};
