import React from 'react';
import './SAOpenResponse.scss'

export default function SAOpenResponse({question, option, handler}) {

    return (
      <div key={question.index} className='question-section'>
        <input
          className='sa-open-response'
          type="text"
          name={question.id} 
          id={question.id+'-'+option+'sa-open-response'}
          placeholder='please share!'
          autoComplete='off'
          onChange={()=>handler()}
        />
      </div>
    )
  }
  