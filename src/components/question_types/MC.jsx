import React, { useContext, useState } from 'react';
import { ResponseContext } from '../../App';
import handleResponses from '../../utils/hooks/handleResponses';
import MCOpenResponse from './MCOpenResponse';
import './MC.scss';
 
function MC(question) {
  const context = useContext(ResponseContext);
  const [otherSelected, setOtherSelected]=useState(false)

  function mcHandler(id, option){
    // Remove invalid tag if present
    const container=document.getElementsByClassName(`${question.id+'-container'}`)[0].parentElement
    container.classList.remove('invalid')

    //add other option if required
    const selection = document.getElementById(question.id+'-'+option).value;
    if(selection=='Other'){
      //inject openResponse
      setOtherSelected(true);
    }else if(otherSelected){
      //remove open response if necessary
      setOtherSelected(false)
    }
    handleResponses(context, id, option)
  }


  return (
    <div className={`mc-question ${question.id+'-container'}`}>
      <h2 className="question-question">{question.question}</h2>
      <div className="MC-options" id={question.id}>
        {question.options.split(', ').map((option, index) => (
          <div key={index} className='MC-option'>
            <input
              type="radio"
              name={question.id} 
              id={question.id+'-'+option} 
              value={option}
              onChange={()=>mcHandler(question.id, option)}
            />
            <label htmlFor={option} className='MC-label'>{option}</label>
            {otherSelected&&option=='Other'?<MCOpenResponse question={question} option={option}/>:null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MC;