import React, { useState, useContext } from 'react';
import './NumericInput.scss';
import { ResponseContext } from '../../App';
import handleResponses from '../../utils/hooks/handleResponses';

function NumericInput(question) {
  const [inputValue, setInputValue] = useState('');
  const context = useContext(ResponseContext);

  // Handle input change
  function numInputHandler(event){

    // Remove invalid tag if present
    const container=document.getElementsByClassName(`${question.id+'-container'}`)[0].parentElement
    container.classList.remove('invalid')

    setInputValue(event.target.value); // retrieve the input 
    handleResponses(context, question.id, parseInt(event.target.value)) // send the value to memory
  }

  return (
    <div className={`numeric-input question-section ${question.id+'-container'}`}>
      <h2 className="question-question">{question.question}</h2>
      <p class='numeric-input-specification'>{question.comment}</p>
      <div className='input-container'>
        <input 
          type="number"
          inputMode='numeric'
          pattern='[0-9]*'
          value={inputValue}
          onChange={(e)=>numInputHandler(e)}
          placeholder='number'
          onWheel={e=>e.preventDefault()}
        />
      </div>
    </div>
  );
}

export default NumericInput;