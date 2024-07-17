import React from 'react';
import './Landing.scss';
import { useNavigate } from 'react-router-dom';


export default function Landing() {
  const navigate = useNavigate();
  
  function handleEnrollment(){
    // save state to local
    localStorage.setItem("enrollment",true);
    // nav to consent
    navigate('/consent')
  }

  return (
    <div id='landing-page'>
      <div id='project-title'>Research in Bartender<br></br>Pain and Injury</div>
      <div id='project-description'>
        You are invited to participate in a research study investigating the pain prevelence and severity among Canadian Bartenders!
        <br></br>
        <br></br>
        <b>You are:</b>
        <ul>
            <li>A bartender in London, Ontario</li>
            <li>Able to read English</li>
            <li>Willing to fill out a 10-minute survey</li>
        </ul>
        <br></br>
        <b>You receive:</b>
        <ul>
        <li>A $10 amazon gift card</li>
        <li>Good feelings from contributing to the improvement of the industry</li>
        </ul>
        <br></br>
        <button id='enroll' onClick={()=>handleEnrollment()}>Enroll</button>
      </div>

      <p id='contact-info'>contact <a href='mailto:cmillwar@uwo.ca?subject=Bartender Research' className='mailto'>cmillwar@uwo.ca</a> if you have any questions</p>
    </div>
  )
}
