import React, {useContext} from 'react';
import handleResponses from '../../utils/hooks/handleResponses';
import { ResponseContext } from '../../App';
import './MCOpenResponse.scss'

export default function MCOpenResponse({question, option}) {
const context = useContext(ResponseContext);

// Handle input change
function orHandler(){
  const input = document.getElementById(question.id+'-'+option+'mc-open-response').value; // get input
  handleResponses(context, question.id, 'Other-'+input); // send to memory
}

    return (
      <div key={question.index} className='question-section'>
        <input
        className='MC-open-response'
          type="text"
          name={question.id} 
          id={question.id+'-'+option+'mc-open-response'}
          placeholder='please share!'
          autoComplete='off'
          onChange={()=>orHandler()}
        />
      </div>
    )
  }
  