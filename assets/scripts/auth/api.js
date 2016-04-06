'use strict';

const app = require('../app-data');

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

const changePassword = (success, failure, data, user) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + 'change-password/' + user,
    data,
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
    data: app.gameId,
    headers: {
      Authorization: "Token token=" + app.user1.token,
    },
  }).done(success)
  .fail(failure);
  console.log('no issues on newGame ajax request');
};

module.exports = {
  signUp,
  signIn,
  signInTwo,
  signOut,
  newGame,
  changePassword,
};
