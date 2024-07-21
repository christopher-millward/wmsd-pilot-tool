function separateFormData(data) {
    return Object.entries(data).reduce(
        (acc, [key, value]) => {
            (key.startsWith('email') ? acc.emailOptions : acc.responses)[key] = value;
            return acc;
        },
        { emailOptions: {}, responses: {} }
    );
}

async function postData(endpoint, data){
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data) // Ensure you're sending the entire data object
        });

        if (!response.ok) {
            // Handle server errors
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json(); // Handle the response if needed
        return result;
    } catch (error) {
        // Handle fetch or network errors
        console.error('Error posting data:', error);
        throw error; // Re-throw or handle error as needed
    }
}

function handleEmails(data) {
    // Define key: endpoint mappings
    const endpoints = {
        'email-1': process.env.REACT_SEVER_SEND_GIFTCARD_URL,
        'email-2': process.env.REACT_SEVER_SEND_RESULTS,
        'email-3': process.env.REACT_SEVER_SEND_FUTURE_ENROLMENTS
    };

    // Route to the endpoints if needed
    Object.entries(endpoints).forEach(([emailKey, endpoint]) => {
        if (data[emailKey] === 'Yes') {
            postData(endpoint, data['email-input'])
        }
    });
}

function handleResponses(data){
    const endpoint = process.env.REACT_SERVER_SUBMIT_RESPONSES;
    postData(endpoint, data)
}

function routeData(data) {
    // Seperate data
    const { emailOptions, responses } = separateFormData(data);
    // Send to controllers
    handleEmails(emailOptions)
    handleResponses(responses)
}

export {routeData};