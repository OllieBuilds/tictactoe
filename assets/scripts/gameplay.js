'use strict';

let currentBoard = [
$('squareone').text(),
$('squareone'),
$('squareone'),

];


let numTurn = 1;


$('td').click( function(){
  if (numTurn % 2 === 0 && $(this).text() === '') {
      $(this).removeClass('playertwo').addClass('playerone');
      $(this).text('X');
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



// module.exports = makeMove;


// for (i=0;i<7;i++){
//     x="txt"+i;
//     document.getElementById(x).firstChild.nodeValue='&<>'
// }
