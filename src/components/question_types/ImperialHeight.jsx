import React, { useState, useContext } from 'react';
import './ImperialHeight.scss';
import { ResponseContext } from '../../App';
import handleResponses from '../../utils/hooks/handleResponses';

function ImperialHeight(question) {
//   const [inputValue, setInputValue] = useState('');
  const context = useContext(ResponseContext);

  // Handle input change
  function numInputHandler(){

    // Remove invalid tag if present
    const container=document.getElementsByClassName(`${question.id+'-container'}`)[0].parentElement
    container.classList.remove('invalid')

    // get height in inches
    const feet = parseInt(document.getElementById(`${question.id}-feet`).value)
    const inches = parseInt(document.getElementById(`${question.id}-inches`).value)
    const height = (feet * 12) + inches

    handleResponses(context, question.id, parseInt(height)) // send the value to memory
  }

  return (
    <div className={`numeric-input question-section ${question.id+'-container'}`}>
      <h2 className="question-question">{question.question}</h2>
      <div className='imperial-height-container'>
        <input
        id={question.id+'-feet'}
        className='height-input'
        type="number"
        onChange={()=>numInputHandler()}
        placeholder='feet'
        onWheel={e=>e.preventDefault()}
        />
        <input
        id={question.id+'-inches'}
        className='height-input'
        type="number"
        onChange={()=>numInputHandler()}
        placeholder='inches'
        onWheel={e=>e.preventDefault()}
        />
       </div>
     </div>
  );
}

export default ImperialHeight;