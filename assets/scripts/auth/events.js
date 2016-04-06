'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

let numTurn = 1;

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event){
    event.preventDefault();
    console.log('stop??');
    let data = getFormFields(this);
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    console.log(data);
  });
  $('#sign-out').on('click', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
};


module.exports = {
  addHandlers,
};
