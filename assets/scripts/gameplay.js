'use strict';

let currentBoard = [
  $('#square0').text(),
  $('#square1').text(),
  $('#square2').text(),
  $('#square3').text(),
  $('#square4').text(),
  $('#square5').text(),
  $('#square6').text(),
  $('#square7').text(),
  $('#square8').text(),
];


// $('td').click(function() {
//   $(this).toggleClass("playerone");
// });
//The above works, but I want to test with function as ..Class(param)
let numTurn = 0;
//
// const choosePlayer = function (turn) {
//   if(turn % 2 === 0){
//     $('td') .click(function(){
//       $('this').toggleClass(choosePlayer('playerone'));
//       numTurn += 1;
//     });
//   } else if (turn % 2 !== 0){
//     $('td') .click(function(){
//       $('this').toggleClass(choosePlayer('playertwo'));
//       numTurn += 1;
//     });
//   }
// };

$('td').click( function(){
  if (numTurn % 2 === 0) {
      $(this).toggleClass('playerone');
      numTurn += 1;
    } else if (numTurn % 2 !== 0){
      $(this).toggleClass('playertwo');
      numTurn += 1;
    }
  });


// $('td') .click(function(){
//   $('this').toggleClass(choosePlayer());
//   numTurn += 1;
// });


// module.exports = makeMove;


// for (i=0;i<7;i++){
//     x="txt"+i;
//     document.getElementById(x).firstChild.nodeValue='&<>'
// }
