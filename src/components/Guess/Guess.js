import React from 'react';
import { range } from '../../utils';


function Guess({word}) {
  return (
      <p className="guess">
        {range(5).map((num) => {
          return(
          <span className="cell" key={num}>{word?word[num]:undefined}</span>
          )
        })}
    </p>
);
}

export default Guess;
