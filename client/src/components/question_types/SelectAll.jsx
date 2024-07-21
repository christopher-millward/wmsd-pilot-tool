import React, {useContext, useState} from 'react';
import {splitOptions, getCheckedBoxes} from '../../utils/general_functions';
import handleResponses from '../../utils/hooks/handleResponses';
import { ResponseContext } from '../../App';
import './SelectAll.scss';
import SAOpenResponse from './SAOpenResponse';

export default function SelectAll(question) {
  const context = useContext(ResponseContext);
  const [otherSelected, setOtherSelected]=useState(false)

  // Handle input change
  function saHandler(id, option){
    // Remove 'invalid' tag if present
    const container=document.getElementsByClassName(`${question.id+'-container'}`)[0].parentElement
    container.classList.remove('invalid')

    // Get all selected values
    const values = getCheckedBoxes(container)

    // Add or remove 'Other' option when required
    values.includes('Other')?setOtherSelected(true):setOtherSelected(false);

    // add the open response text to values
    const ORinput = values.includes('Other') && document.getElementById('Q41-Othersa-open-response');
    if (ORinput) values.push(`Other-${ORinput.value}`);
    
    // format to a semicolon separated string.
    // The Google Sheets API doens't accept arrays, so need to wrap it all into one string. 
    const formatted_values = values.join('; ');

    // Send to memory
    handleResponses(context, question.id, formatted_values)
  }

    return (
      <div className={`select-all-question question-section ${question.id+'-container'}`}>
      <h2 className="question-question">{question.question}</h2>
      <div className="select-all-options" id={question.id}>
        {splitOptions(question.options).map((option, index) => (
          <div key={index} className='box-and-option'>
            <input
              className='hidden-checkbox'
              type="checkbox"
              name={question.id} 
              id={question.id+'-'+index} 
              value={option}
              onChange={() => saHandler(question.id, index)}
            />
            <label className='select-all-option' htmlFor={option}>{option}</label>
            {otherSelected&&option=='Other'?<SAOpenResponse question={question} option={option} handler={saHandler}/>:null}
          </div>
        ))}
      </div>
      </div>
    )
  };
  