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
// Math.random() tests code
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-in',
    data,
  }).done(success)
  .fail(failure);
};
//
// const signOut = (success, failure) => {
// // if (!app.user) === bad;
//   console.log(app);
//   $.ajax({
//     method: 'DELETE',
//     url: app.api + 'sign-out/' + app.user.id,
//     headers: {
//       Authorization: "Token token=" + app.user.token,
//     },
//   }).done(success)
//   .fail(failure);
// };

module.exports = {
  signUp,
  signIn,
  // signOut,
};
