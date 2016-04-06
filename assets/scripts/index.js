'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./gameplay');

const authEvents = require('./auth/events.js');

require('./example.js');
// require('./gameplay.js');

// On document ready
// $(() => {
//
// });

let boardView = [
  $('#square0'),
  $('#square1'),
  $('#square2'),
  $('#square3'),
  $('#square4'),
  $('#square5'),
  $('#square6'),
  $('#square7'),
  $('#square8'),
];


// let numTurn = 1;
// $(() => {
//   $('#book-form').on('submit', function (event) {
//     event.preventDefault();
//     let bookId = $('#book-form').find("[name='book-id']").val();
//     if (bookId) {
//
//     } else {
//       libraryApi.books(ui.getBooksSuccess, ui.getBooksFail);
//     }
//   });
// });
// $(() => {
// $('td').click( function () {
//   if (numTurn % 2 === 0 && $(this).text() === '') {
//       $(this).removeClass('playertwo').addClass('playerone');
//       $(this).text('X');
//       numTurn += 1;
//       console.log('asdf');
//       // console.log ($(this).get());
//     } else if (numTurn % 2 !== 0 && $(this).text() === ''){
//       $(this).removeClass('playerone').addClass('playertwo');
//       $(this).text('O');
//       numTurn += 1;
//     }else{
//       $('#');
//         authEvents.addHandlers();
//     }
//   });
// });
// $('#book-form').on('submit', function (event) {
//     event.preventDefault();
//     // let bookId = $('#book-form').find("[name='book-id']").val();
//     let form = getFormFields(event.target);
//     let bookId = $('.book-id').val();
//     libraryApi.books(ui.getBooksSuccess, ui.getBooksFail, form, bookId);
//   });
