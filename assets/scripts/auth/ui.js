'use strict';

const app = require('../app-data.js');
const users = require('../users');

let gameId;

const success = (data) => {
  console.log(data);
  gameId = data.game.id;
  console.log(gameId);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
    app.user1 = data.user;
    users.player1.authToken = data.user.token;
    console.log('user 1' + app.user1);
  };


const signInSuccessTwo = (data) => {
    app.user2 = data.user;
    users.player2.authToken = data.user.token;
    console.log('user 2' + app.user2);
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
  gameId = data.game.id;
  console.log(gameId);
};

checkUser();

module.exports = {
  failure,
  success,
  signInSuccess,
  signInSuccessTwo,
  signOutSuccess,
  checkUser,
  gameId,
  newGameSuccess,
};
