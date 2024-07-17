import React from 'react';
import renderQuestionComponent from '../utils/question_mapper';
import './EmailQuestions.scss';

export default function EmailQuestions() {

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

  return (
    <div id='email-intake-container'>
        <h2 id='email-intake-title'>Email Intake</h2>
        <p><b>Your email address is NOT AT ALL linked to your questionnaire response.</b>
            If you choose to share your email address for either of the following purposes, 
            your email address will be sent to a <b>seperate</b> database that has no ability 
            to be linked to your questionnaire response. 
        </p>

        
        <div className='question-card'>
            {Object.keys(questions).map((question)=>{
                questions[question].id=question;
                return (
                     <div>{renderQuestionComponent(questions[question])}</div>
                )
            })}

        
            <div className={`open-response-question question-section`}>
                <h2 className="question-question">Please enter your email</h2>
                <div>
                    <textarea
                    className='email-4'
                    type="text"
                    name='test'
                    id={'test'}
                    placeholder='Please share!'
                    autoComplete='off'
                    />
                </div>
            </div>
        </div>

        
        {/* {Object.keys(questions).map((question)=>{
            return (
                <div className='question-card' key={question}> 
                   { renderQuestionComponent(questions[question]) }
                </div>
            )
        })} */}

      
    </div>
  )
}
