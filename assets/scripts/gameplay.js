'use strict';



let numTurn = 0;
let playeroneWins = 0;
let playertwoWins = 0;


$('td').on('click', function(){
  if (numTurn % 2 === 0 && $(this).text() === '') {
      $(this).removeClass('playertwo').addClass('playerone');
      $(this).text('X');
      numTurn += 1;
    } else if (numTurn % 2 !== 0 && $(this).text() === ''){
      $(this).removeClass('playerone').addClass('playertwo');
      $(this).text('O');
      numTurn += 1;
    }
    console.log(currentBoard);
  });
