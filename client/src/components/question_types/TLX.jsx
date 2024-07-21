import React, { useContext, useEffect } from 'react';
import { ResponseContext } from '../../App';
import handleResponses from '../../utils/hooks/handleResponses';
import './TLX.scss';

export default function TLX(question) {
  const context = useContext(ResponseContext);

  // Hanlde input change
  function tlxHandler(name){
    // Don't need to remove invalid tag because we're setting default values (will never be invalid)

    const input = document.querySelectorAll(`input[type="range"][name="${name}"`)[0].value; // get input
    handleResponses(context, question.id, parseInt(input)) // send to memory
  };

  
  // Set default value
  const default_value=1;

  useEffect(()=>{
    const element = document.querySelectorAll(`input[type="range"][name="${question.id}"`)[0]; // get element
    element.value=default_value; // display value to user
    handleResponses(context, question.id, default_value); // send to memory
  },[]); // only run on initialization


  return (
    <div className={`tlx-question question-section ${question.id+'-container'}`}>
      <h2 className="question-question">{question.question}</h2>
      <p className='question-specification'>*consider everything you do in a shift beyond just answering to the chit printer (speaking to customers, counting the till, etc.)</p>
      <div className="tlx-options" id={question.id}>
          <div key={question.index} className='tlx-container'>
            <label>not at all</label>
            <div className='tlx-vertical-container'>
              <input 
                name={question.id}
                className='tlx-option'
                type="range" 
                min="1" 
                max="21" 
                placeholder="1"
                step="1"
                onChange={()=>tlxHandler(question.id)}
              />
              <div className="ticks">
                <span className="tick major-tick">|</span>
                <span className="tick minor-tick">|</span>
                <span className="tick major-tick">|</span>
                <span className="tick minor-tick">|</span>
                <span className="tick major-tick">|</span>
              </div>
            </div>
            <label>extremely</label>
        </div>
      </div>
    </div>
  );
}
