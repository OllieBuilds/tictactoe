'use strict';


let gameArray = [
];


let numTurn = 0;





$('td').click( function () {
  if (numTurn % 2 === 0 && $(this).text() === '') {
      $(this).removeClass('playertwo').addClass('playerone');
      $(this).text('X');
      gameArray.push('X');
      numTurn += 1;
      console.log(gameArray);
      // console.log ($(this).get());
    } else if (numTurn % 2 !== 0 && $(this).text() === ''){
      $(this).removeClass('playerone').addClass('playertwo');
      $(this).text('O');
      gameArray.push('O');
      numTurn += 1;
      console.log(gameArray);
    }
  });



module.exports = true;
