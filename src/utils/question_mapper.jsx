import YN from '../components/question_types/YN';
import NumericInput from '../components/question_types/NumericInput';
import MC from '../components/question_types/MC';
import RegionalPain from '../components/question_types/RegionalPain';
import OpenResponse from '../components/question_types/OpenResponse';
import TLX from '../components/question_types/TLX';
import SelectAll from '../components/question_types/SelectAll';
import ImperialHeight from '../components/question_types/ImperialHeight';


const questionTypeToComponent = {
  'Y/N': YN,
  'numeric input': NumericInput,
  'MC': MC,
  'regional pain': RegionalPain,
  'open response': OpenResponse,
  'TLX': TLX,
  'select all': SelectAll,
  'imperial height': ImperialHeight
};

function renderQuestionComponent(question) {
  const Component = questionTypeToComponent[question.type];

  if (Component) {
    return <Component {...question} />; // Spread question props into the component
  } else {
    // Handle unknown question type
    console.error("Unknown question type:", question.type); 
    return null;
  }
}

export default renderQuestionComponent;