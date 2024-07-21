import React, { useContext } from 'react';
import renderQuestionComponent from '../utils/question_mapper';
import './EmailQuestions.scss';
import handleResponses from '../utils/hooks/handleResponses';
import { ResponseContext } from '../App';

export default function EmailQuestions() {
    const context = useContext(ResponseContext);

    const questions = {
        "email-1":{
            "category":"Email Intake",
            "type":"Y/N",
            "question":"Do you wish to recieve the $10 Amazon gift card?",
            "options":"",
            "info":"",
            "comment":""
        },
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
        <h2 id='email-intake-title'>Email Intake</h2>
        <p id='email-explanation'><b>Your email address is NOT AT ALL linked to your questionnaire response.</b>
            If you choose to share your email address for either of the following purposes, 
            your email address will be sent to a <b>seperate</b> database that is <b>NOT</b> linked to your questionnaire response. 
        </p>

        
        <div className='question-card'>
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
                    placeholder=' Leave blank if all were "No".'
                    onChange={()=>emailInputHandler()}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
