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
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    console.log(data);
  });
  $('#sign-out').on('click', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('td').click( function () {
    if (numTurn % 2 === 0 && $(this).text() === '') {
        $(this).removeClass('playertwo').addClass('playerone');
        $(this).text('X');
        numTurn += 1;
        // console.log ($(this).get());
      } else if (numTurn % 2 !== 0 && $(this).text() === ''){
        $(this).removeClass('playerone').addClass('playertwo');
        $(this).text('O');
        numTurn += 1;
      }
    });
};


module.exports = {
  addHandlers,
};
