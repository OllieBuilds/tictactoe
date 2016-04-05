'use strict';

let currentBoard = [
$('squareone'),

];


// $('td').click(function() {
//   $(this).toggleClass("playerone");
// });
//The above works, but I want to test with function as ..Class(param)
let numTurn = 1;
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
  if (numTurn % 2 === 0 && $(this).text() === '') {
      $(this).removeClass('playertwo').addClass('playerone');
      $(this).text('X');
      // currentBoard
      numTurn += 1;
      console.log(currentBoard);
      // console.log ($(this).get());
    } else if (numTurn % 2 !== 0 && $(this).text() === ''){
      $(this).removeClass('playerone').addClass('playertwo');
      $(this).text('O');
      numTurn += 1;
      console.log(currentBoard);
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
