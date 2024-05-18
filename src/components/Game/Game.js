import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import WordDisplay from '../WordDisplay/WordDisplay';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [word, setWord] = React.useState([]);

  function handleWord(text) {
    setWord([...word, text]);
  }
  

  return (<>
  Put a game here!
  <WordDisplay display={word} />
  <Input handleWord={handleWord} />
  </>
  );
  
}

export default Game;
