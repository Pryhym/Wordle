import React from 'react';
import { range } from '../../utils';
import checkGuess from '/src/game-helpers.js'

function Guess({word, answer}) {
  return (
      <p className="guess">
        {range(5).map((num) => {
          const check = checkGuess(word, answer);
          return(
          <span className={`cell ${check?check[num].status:undefined}`} 
          key={num}

          >{word?word[num]:undefined}</span>
          )
        })}
    </p>
);
}

export default Guess;
