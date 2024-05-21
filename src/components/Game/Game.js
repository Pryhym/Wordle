import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import WordDisplay from '../WordDisplay/WordDisplay';
import GameOver from '../GameOver/GameOver';

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  
  const [word, setWord] = React.useState([]);
  const [winLose, setWinLose] = React.useState('running');
  const [answer, setAnswer] = React.useState(()=>sample(WORDS));
  const num = word.length;
 
  

  function handleWord(text) {
    setWord([...word, text]);
   

    if (text === answer){
      setWinLose('win');
    } else if((num+1) === 6){
      setWinLose('lose');
    }
  }

  function reset() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setWord([]);
    setWinLose('running');
  }
  
  return (
  <>
  <WordDisplay display={word} answer={answer} />
  <Input handleWord={handleWord} winLose={winLose} />
  <GameOver winLose={winLose} num={num} answer={answer} />
  <button className='reset' onClick={()=>{reset()}}>RESET</button>
  </>
  );
  
}

export default Game;
