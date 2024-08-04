import React from 'react';
import raw_questions from '../../Questionnaire_questions.json'
import renderQuestionComponent from '../../utils/question_mapper';
import '../Questionnaire.scss';
import EmailQuestions from '../../components/EmailQuestions';
import DEMOSubmit from '../../components/Demo/DEMOSubmit';

function DemoQuestionnaire() {
  const categories = {};

  const displayQuestionsByCategory = () => {

    // Organize by category
    for (const [questionId, question] of Object.entries(raw_questions)) { // for each question
      question.id = questionId; // set the question id
      const category = question.category; // set the category
      categories[category] ??= []; // if there is no category yet
      categories[category].push(question); // add the question to its appropriate category
    }
    
    return Object.keys(categories).map((category) => (
        categories[category].map((question) => (
          <div className='question-card' key={question.question}> 
            {renderQuestionComponent(question)} 
          </div>
        ))
    ));
  };

  return (
    <div id='questionnaire-page'>
      <div className='questionnaire-title'>
          <p id='questionnaire-title-text'>Questionnaire</p>
        </div>
      <div id='all-question-container'>
        {raw_questions && displayQuestionsByCategory()}
        <EmailQuestions/>
      </div>
      <DEMOSubmit/>
  </div>
  )
}

export default DemoQuestionnaire;