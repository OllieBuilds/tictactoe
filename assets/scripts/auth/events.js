'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');
const app = require('./app-data');

let playerOne;
let playerTwo;

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event){
    event.preventDefault();
  // two users
  if(app.user === undefined){
    let data = getFormFields(this);
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    playerOne = app.user;
    console.log(data);
  }else if(app.user !== undefined){
    let data = getFormFields(this);
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    playerTwo = app.user;
    console.log(data);
  }
  });
  $('#sign-out').on('click', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
};


module.exports = {
  addHandlers,
};
