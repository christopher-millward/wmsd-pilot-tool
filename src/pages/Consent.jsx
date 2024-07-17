import React, { useContext } from 'react'
import './Consent.scss';
import consentHTML from '../assets/consent-doc';
import { useNavigate } from 'react-router-dom';
import { PermissionsContext } from '../App';

export default function Consent(pops) {
  const permissionSetters = useContext(PermissionsContext);
  const navigate = useNavigate();

  const are_responses_validated = () => localStorage.getItem('all-responses') == 'true';

  function handleConsent(){
    // set state to true
    // permissionSetters.setConsentObtained(true);
    // save state to local
    localStorage.setItem("consent-obtained",true);
    // Navigate where needed
    navigate(are_responses_validated() ? '/thankyou' : '/questionnaire');
  }

  return (
    <div id='consent-page'>
      <div id='consent-title'>
        Consent
      </div>

      <div id='consent-container'>
        <p>Please read the following letter of informed consent before continuing:</p>
        <div dangerouslySetInnerHTML={{__html:consentHTML}} id='consent-text'></div>
      </div>

      <button id='consent-button' onClick={()=>handleConsent()}>I have read the document <br></br>and fully understand<br></br><p id='consent-next-step'>(next step)</p></button>

      <p id='contact-info'>contact <a href='mailto:cmillwar@uwo.ca?subject=Bartender Research' className='mailto'>cmillwar@uwo.ca</a> if you have any questions</p>
    </div>
  )
}
