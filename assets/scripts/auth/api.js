'use strict';

const app = require('../app-data');
const gameplay = require('../gameplay');

const signUp = (success, failure, data) => {
// Math.random() tests code
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
  console.log(app);
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-up',
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-in',
    data,
  }).done(success)
  .fail(failure);
};

const changePassword = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + 'change-password/' + app.user1.id,
    data,
    headers: {
      Authorization: 'Token token=' + app.user1.token,
    },
  }).done(success)
  .fail(failure);
};

const signInTwo = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-in',
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
// if (!app.user) === bad;
  console.log(app);
  $.ajax({
    method: 'DELETE',
    url: app.api + 'sign-out/' + app.user1.id,
    headers: {
      Authorization: "Token token=" + app.user1.token,
      // Authorization: "Token token=" + app.user2.token,
    },
  }).done(success)
  .fail(failure);
// user two sign out
  $.ajax({
    method: 'DELETE',
    url: app.api + 'sign-out/' + app.user2.id,
    headers: {
      Authorization: "Token token=" + app.user2.token,
    },
  }).done(success)
  .fail(failure);
};

const newGame = (success, failure) => {
  console.log(app);
  $.ajax({
    method: 'POST',
    url: app.api + 'games',
    headers: {
      Authorization: "Token token=" + app.user1.token,
    },
  }).done(success)
  .fail(failure);
  console.log('no issues on newGame ajax request');
};

const joinGame = (success, failure, data) => {
  console.log('update game call');
  console.log(data);
  $.ajax({
    method: 'PATCH',
    url: app.api + 'games/' + gameplay.gameId,
    headers:{
      Authorization: "Token token=" + app.user2.token,
    },
  }).done(success)
  .fail(failure);
  console.log('Game updated');
};

const updateGame = (success, failure, ugIndex, ugValue) => {
  console.log('updateGame called');
  $.ajax({
    method: 'PATCH',
    url: app.api + 'games/' + gameplay.gameId,
    headers:{
      Authorization: "Token token=" + app.user1.token,
    },
    data: {
        "game": {
          "cell": {
            "index": ugIndex,
            "value": ugValue,
          },
          "over": false
        },
    }
  }).done(success)
  .fail(failure);
  console.log(gameplay.cells);
};

module.exports = {
  signUp,
  signIn,
  signInTwo,
  signOut,
  newGame,
  changePassword,
  updateGame,
  joinGame,
};
