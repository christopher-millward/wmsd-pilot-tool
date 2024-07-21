import { validateForm } from './response_validation';

function validateAll(responses){

    // Validate entries & check consent
    const is_form_validated = validateForm(responses);
    const is_consent_obtained = () => localStorage.getItem('consent-obtained') == 'true';

    //object to return
    let result = { status: null, reason: null };

    // Checks if responses are good. And if they are, checks if consent is good. 
    // want to route to consent only if responses are good. 
    if (is_form_validated) {
        localStorage.setItem('all-responses', true);

        result.status = is_consent_obtained();
        result.reason = is_consent_obtained() ? null : 'consent';
    } else {
        result.status = false;
        result.reason = 'questions';
    }

    return result
}

export {validateAll};
