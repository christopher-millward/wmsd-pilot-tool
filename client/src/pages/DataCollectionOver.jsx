import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponseContext } from '../App';
import { validateMailingList } from '../utils/validation/mailing_list_validation';
import { routeData} from '../services/routing';
import DataCollectionOverQuestions from '../components/DataCollectionOverQuestions';
import './DataCollectionOver.scss';


export default function DataCollectionOver() {
  const navigate = useNavigate();
  const responseContext = useContext(ResponseContext);
  
  function handleEnrollment(){
        //check that all is good
        const all_good = validateMailingList(responseContext.allResponses);
        if(all_good){
            // send data to server 
            routeData(responseContext.allResponses);

            // wipe all states clean
            responseContext.setAllResponses({})
            localStorage.clear()

            // go to thankyou
            navigate('/thankyou')
        }
  }

  return (
    <div id='data-collection-over-page'>
      <h1 id='project-title'>Research in Bartender<br></br>Pain and Injury</h1>
      <div className='mailing-list-container'>
        <DataCollectionOverQuestions/>
        <button id='mailing-enroll' onClick={()=>handleEnrollment()}>Subscribe</button>
      </div>

      <p id='mailing-contact-info'>contact <a href='mailto:cmillwar@uwo.ca?subject=Bartender Research' className='mailto'>cmillwar@uwo.ca</a> if you have any questions</p>
    </div>
  )
}
