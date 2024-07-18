import React, {useContext, useEffect} from 'react';
import handleResponses from '../../utils/hooks/handleResponses';
import { ResponseContext } from '../../App';
import './OpenResponse.scss';

export default function MCOpenResponse(question) {
const context = useContext(ResponseContext);

  // Handle input changes
  function orHandler(){
    // Remove invalid tag if present
    const container=document.getElementsByClassName(`${question.id+'-container'}`)[0].parentElement
    container.classList.remove('invalid')

    const input = document.getElementById(question.id+'open-response').value; // get input
    handleResponses(context, question.id, input); // send the value to memory
  };

  // Adjust the height of text area if text overflows space
  useEffect(() => {
      const textarea = document.getElementById(question.id+'open-response'); // get area
      
      // Function to adjust height
      function adjustTextareaHeight() {
          textarea.style.height = 'auto'; // allow height to shrink if text is removed
          textarea.style.height = (textarea.scrollHeight) + 'px'; // make it the height it needs to be
      }

      textarea.addEventListener('input', adjustTextareaHeight); // adjust the height on input change

      return () => {
          textarea.removeEventListener('input', adjustTextareaHeight); // remove the event listener when the component unmounts
      };
  }, []); // Only run on initialization

    return (
    <div className={`open-response-question question-section ${question.id+'-container'}`}>
        <h2 className="question-question">{question.question}</h2>
        <div key={question.index}>
            <textarea
            type="text"
            name={question.id}
            id={question.id+'open-response'}
            placeholder='You may leave this blank.'
            autoComplete='off'
            onChange={()=>orHandler()}
            />
        </div>
    </div>
    )
  }
  