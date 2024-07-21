//This file is meant to contain any general purpose 'helper' function in this project.

function splitOptions(str){
    /*
    description: this function is used to split a string by commas, but only if they're not within parentheses.
    params: str = string to be split. 
    returns: returns array containing each string
    */


    //Regular expression to match commas followed by a space that are not within parentheses
    const regex = /,\s(?![^()]*\))/g;

    // Split the string using the regular expression
    const result = str.split(regex);

    return result;
};

function sortByQuestionNumber(responses){
    // returns an object sorted by question number.
    // params: responses = Object containing all responses

    const sorted_questions= Object.keys(responses).sort((a, b)=>{
        const num_a = parseInt(a.split('-')[0].substring(1))
        const num_b = parseInt(b.split('-')[0].substring(1))
        return num_a - num_b
    });

    return sorted_questions.reduce((obj, key) => (obj[key] = responses[key], obj), {});
}

function getCheckedBoxes(container){
    // get all checked boxes
    const allboxes = container.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(allboxes).filter(checkbox => checkbox.checked).map(checkbox=> checkbox.parentElement);
    
    // check values
    const all_vals = allChecked.map(el=>el.querySelector(`label`).getAttribute('for'))
    
    return all_vals
}


export {splitOptions, sortByQuestionNumber, getCheckedBoxes};