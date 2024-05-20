import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import NUM_OF_GUESSES_ALLOWED from '../../constants';

function WordDisplay({display, answer}) {
  return (
  <div>
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        
        return(
        <Guess key={num} word={display[num]} answer={answer} />
        );
      })}
</div>
  </div>
  )
}

export default WordDisplay;
