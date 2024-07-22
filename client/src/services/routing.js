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
        'email-1': import.meta.env.VITE_SEVER_SEND_GIFTCARD_URL,
        'email-2': import.meta.env.VITE_SEVER_SEND_RESULTS,
        'email-3': import.meta.env.VITE_SEVER_SEND_FUTURE_ENROLMENTS
    };

    // Route to the endpoints if needed
    Object.entries(endpoints).forEach(([emailKey, endpoint]) => {
        if (data[emailKey] === 'Yes') {
            const dataObj = {"email": data['email-input']} // make valid JSON
            postData(endpoint, dataObj)
        }
    });
}

function handleResponses(data){
    const endpoint = import.meta.env.VITE_SERVER_SUBMIT_RESPONSES;
    // make sure the data is proper JSON format
    const dataObj = {"data":data}
    postData(endpoint, dataObj)
}

function routeData(data) {
    // Seperate data
    const { emailOptions, responses } = separateFormData(data);
    // Send to controllers
    handleEmails(emailOptions)
    handleResponses(responses)
}

export {routeData};