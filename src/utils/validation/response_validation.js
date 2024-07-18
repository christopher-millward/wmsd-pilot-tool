// Get list of all question ids
import raw_questions from '../../Questionnaire_questions.json';
const remove=['Q20', 'Q21'];
const Q_IDs=Object.keys(raw_questions).filter((q)=>!remove.includes(q)); // get rid of Q20 and Q21 (they're not real)

// Add TLX question numbers to the list of ids
const regions=['Neck', 'Upper Back', 'Lower Back', 'Shoulders', 'Elbows', 'Wrists', 'Hands', 'Hips', 'Knees', 'Feet & Ankles'];
regions.forEach(region=>{ // for each region of the body
    Q_IDs.push('Q20-'+region); // add question id
    Q_IDs.push('Q21-'+region); // add question id
})

// Add email intake questions
const emailIDs = ['email-1', 'email-2', 'email-3'];
Q_IDs.push(...emailIDs)

function validateAllResponses(responses){

    let invalid={}; // initiate empty object (used object in case I later need to 
                    // perform data type validations & need to specify the message)

    // Identify the empty questions
    Q_IDs.forEach((id)=>{    
        if(!Object.keys(responses).includes(id) || responses[id]==='' || Number.isNaN(responses[id])){ // if blank
            invalid[id]='Question has not been answered'; // add to Obj
        }
    
    // If any of the email questions were "Yes"
    // if(emailIDs.some(id => document.querySelector(`#${id} input[type="radio"]:checked`).value === "Yes")){
    //     console.log("one is a yes")
    // } 
    });
    return invalid;
}

function colorInvalid(invalids){
    // Put a red box around every invalid quesiton
    for (var id in invalids){
        const cname=id+'-container';
        const element=document.getElementsByClassName(cname)[0].parentElement;
        
        element ? element.classList.add('invalid') : console.log('error: element not found');
    }
}

function scrollToHighest(invalids){
    // Get list of all element
    const elements = Object.keys(invalids).map(id => document.getElementsByClassName(`${id}-container`)[0]);
    
    // Find the top-most element
    const topInvalid = elements.reduce((topEl, el) => {
        const elPos = el.getBoundingClientRect().top + scrollY;
        return elPos < (topEl.pos || Infinity) ? { el, pos: elPos } : topEl;
    }, {}).el;

    // Scroll to element
    topInvalid?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function validateForm(responses){
    // Validate each question
    const invalids = validateAllResponses(responses);
    
    // Color and scroll as needed
    colorInvalid(invalids) 
    scrollToHighest(invalids) 
    
    // return true if any are wrong
    return Object.keys(invalids).length === 0;
}



export {validateForm};
