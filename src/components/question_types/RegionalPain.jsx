import React, {useContext, useEffect, useState} from 'react';
import handleResponses from '../../utils/hooks/handleResponses';
import { ResponseContext } from '../../App';
import './RegionalPain.scss';

export default function RegionalPain(question) {
  const context = useContext(ResponseContext);

  // Set default values
  const default_value=2;
  const regions=['Neck', 'Upper Back', 'Lower Back', 'Shoulders', 'Elbows', 'Wrists', 'Hands', 'Hips', 'Knees', 'Feet & Ankles']

  useEffect(() => {
    regions.forEach(region=>{ // for each region of the body
      handleResponses(context, question.id+'-'+region, default_value) // add the initial value to memory
    })
  }, []); // only run on initialization


  // Handle input changes 
  function rpHandler(e){
    // Don't need to remove invalid tag because we're setting default values (will never be invalid)

    // Get values
    const value = e.target.value;
    const id=e.target.id;

    e.target.nextSibling.textContent = value; // display value to user
    handleResponses(context, id, parseInt(value)); // send value to memory
  };

    return (
    <div className={`regional-pain-question question-section ${question.id+'-container'}`}>
      <h2 className="question-question">{question.question}</h2>
      <div className="regional-pain-options" id={question.id}>
        {regions.map((region, index) =>(
          <div key={index} className='slider-container'>
            <label htmlFor={region} className='region-name'>{region}</label>
            <input
              type="range"
              min="1" 
              max="10"
              step="1"
              defaultValue={default_value}
              name={question.id} 
              id={question.id+'-'+region}
              className='pain-slider'
              onChange={(e)=>rpHandler(e)}
            />
            <label className='slider-value'> {default_value}</label>
          </div>
        ))}
      </div>
    </div>
    )
  }
  