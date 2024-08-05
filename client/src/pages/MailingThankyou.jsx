import React from 'react';
import './Thankyou.scss';
import { useNavigate } from 'react-router-dom';

export default function MailingThankyou() {
    const navigate = useNavigate();
    return (
        <div id='thankyou-page'>

            <div id='thankyou-title'>
            Thank You!
            </div>

            <div id='thankyou-container'>
            <p>Your interest is greatly appreciated. You have been successfully added to our mailing list!
            </p>
            <br></br>
            <p>
                If you change your mind, just shoot Christopher an email at <a href='mailto:cmillwar@uwo.ca?subject=Bartender Research Mailing - Opt Out' className='mailto'>cmillwar@uwo.ca</a>.
            </p>
            </div>

            <button id='thankyou-button' onClick={()=>navigate('/mailing-list')}>Back to enrollment</button>

            <p id='contact-info'>contact <a href='mailto:cmillwar@uwo.ca?subject=Bartender Research' className='mailto'>cmillwar@uwo.ca</a> if you have any questions</p>
        </div>
    )
}
