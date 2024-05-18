import React from 'react';

function Input({handleWord}) {
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
  return <div>
    <form className="guess-input-wrapper"
        onSubmit={handleText}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" 
    type="text"
    value={text}
    required
    pattern='[a-zA-Z]{5}'
    title='Please use 5 Alpa-Numerics'
    onChange={event=> {
      setText(event.target.value.toUpperCase());
    }}/>
</form>
  </div>;
}

export default Input;

