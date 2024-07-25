import React from 'react';
import './Thankyou.scss';
import { useNavigate } from 'react-router-dom';

export default function Thankyou() {
    const navigate = useNavigate();
    return (
        <div id='thankyou-page'>

            <div id='thankyou-title'>
            Thank You!
            </div>

            <div id='thankyou-container'>
            <p>Your participation is greatly appreciated. On behalf of the research team, thank you
                very much! 
            </p>
            <br></br>
            <p>
                If you opted into the gift card, you can expect to recieve it via email within the next couple days (Christopher sends these out manually). Thank you for your patience.
            </p>
            </div>

            <button id='thankyou-button' onClick={()=>navigate('/')}>Back to main</button>

            <p id='contact-info'>contact <a href='mailto:cmillwar@uwo.ca?subject=Bartender Research' className='mailto'>cmillwar@uwo.ca</a> if you have any questions</p>
        </div>
    )
}
