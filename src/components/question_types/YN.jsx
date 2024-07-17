import React, { useContext} from 'react';
import { ResponseContext } from '../../App';
import handleResponses from '../../utils/hooks/handleResponses';
import './YN.scss';

export default function YN(question) {
  const context = useContext(ResponseContext);
  const options=['Yes', 'No'];

  // Didn't include response handler in this one because it's very straight-forward.
  function ynHandler(option){
    // Remove invalid tag if present
    const container=document.getElementsByClassName(`${question.id+'-container'}`)[0].parentElement
    container.classList.remove('invalid')

    handleResponses(context, question.id, option) // send to memory
  }

  return (
    <div className={`yn-question question-section ${question.id+'-container'}`}>
      <h2 className="question-question">{question.question}</h2>
      <div className="yn-options" id={question.id}>
        {options.map(option => (
          <div key={question.index} className='yn-container'>
            <input
              type="radio"
              name={question.id} 
              id={option} 
              value={option}
              onChange={() => ynHandler(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
  }
  