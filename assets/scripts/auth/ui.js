'use strict';

const app = require('../app-data.js');
const users = require('../users');
const gameplay = require('../gameplay');


const success = (data) => {
  console.log(data);
  console.log('success');
};

const pwSuccess = () => {
  console.log('Password has been changed');
};

const failure = (error) => {
  console.error(error);
};


const signInSuccess = (data) => {
    app.user1 = data.user;
    users.player1.authToken = data.user.token;
    console.log('user 1' + app.user1);
    $('.register').addClass('hidden');
    $('#new-game').removeClass('hidden');
  };


const signInSuccessTwo = (data) => {
    app.user2 = data.user;
    users.player2.authToken = data.user.token;
    console.log( app.user2);
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

const newGameSuccess = (data) => {
  console.log(data);
  gameplay.gameId = data.game.id;
  console.log(gameplay.gameId);
  $('#new-game').addClass('hidden');
  $('#sign-in-two').removeClass('hidden');
};



checkUser();

module.exports = {
  failure,
  success,
  pwSuccess,
  signInSuccess,
  signInSuccessTwo,
  signOutSuccess,
  checkUser,
  newGameSuccess,
};
