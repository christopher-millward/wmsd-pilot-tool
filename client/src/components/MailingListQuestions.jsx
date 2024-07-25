import React, { useContext } from 'react';
import renderQuestionComponent from '../utils/question_mapper';
import handleResponses from '../utils/hooks/handleResponses';
import { ResponseContext } from '../App';

export default function MailingListQuestions() {
    const context = useContext(ResponseContext);

    const questions = {
        "email-2":{
            "category":"Email Intake",
            "type":"Y/N",
            "question":"Do you wish to recieve an email update with the results of this study?",
            "options":"",
            "info":"",
            "comment":""
        },
        "email-3":{
            "category":"Email Intake",
            "type":"Y/N",
            "question":"Do you wish to be notified via email when this research group is recruiting for future bar-related research?",
            "options":"",
            "info":"",
            "comment":""
        }
    }

    function emailInputHandler(){
        const emailElement = document.getElementById('email-input');
        // Remove invalid tag if present
        emailElement.parentElement.classList.remove('invalid')
        handleResponses(context, 'email-input', emailElement.value);
    }


  return (
    <div id='email-intake-container'>
        
        <div className='question-card'>
        <p className='mailing-list-text'>Thank you so much for your interest in this project!
        <br></br>
        <br></br>
        This round of data collection has come to an end. If you wish to stay informed on the results of this project and/or future studies, 
            we encourage you to leave your email below!
        </p>
        <br></br>
            {Object.keys(questions).map((question)=>{
                questions[question].id=question;
                return (
                     <div>
                        {renderQuestionComponent(questions[question])}
                        <br></br>
                     </div>
                     
                )
            })}

        
            <div className={`open-response-question question-section`}>
                <h2 className="question-question">Please enter your email address.</h2>
                <div className='email-input-container'>
                    <input
                    className='email-4'
                    type='email'
                    name='email-input'
                    id='email-input'
                    placeholder=' email'
                    onChange={()=>emailInputHandler()}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
