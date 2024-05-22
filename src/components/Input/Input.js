import React from 'react';

function Input({handleWord, winLose}) {

  const rows = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L',],
    ['Z','X','C','V','B','N','M']
  ];


  const [text, setText] = React.useState('');
  
  function handleText(event){
    event.preventDefault();
    if( text.length!== 5){
     return;
    } else {
     handleWord(text);
     setText('');
    }
  }

  return (
    <div>
    <form className="guess-input-wrapper"
        onSubmit={handleText} 
        >
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" 
    type="text"
    value={text}
    maxLength={5}
    disabled={winLose!=='running'}
    pattern='[a-zA-Z]{5}'
    title='Please use 5 Alpa-Numerics'
    onChange={event=> {
            setText(event.target.value.toUpperCase());
          }
        }
        />
</form>
    <div>
      {rows.map((row, index) =>(
        <div className="keyboard-row" key={index}>
          {row.map((letter, index) => (
            <div className="key" key={index}
              onClick={()=>{
                if(text.length === 5){
                return;
              }else{
                setText(`${text}${letter}`)
              }
            }}>{letter}</div>
              ))}
        </div>
      )
      )}
    </div>
  </div>
)
};

export default Input;

