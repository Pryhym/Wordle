import React from 'react';

function GameOver({winLose, num ,answer}) {
 
  if (winLose === 'win'){
    return (
          <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {num} guesses</strong>.
      </p>
    </div>
        );
      }
  if (winLose === 'lose'){
    return (
          <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
        );
  }
}

export default GameOver;
