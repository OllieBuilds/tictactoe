'use strict';

// require('win');

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


let numTurn = 1;


$('td').click( function(){
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
//


module.exports = true;
