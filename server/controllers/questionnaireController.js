const { connection } = require('../middleware/connect_to_SS');

const postResponse = async (req, res)=>{

    const { auth, ss, spreadsheetId } = await connection;
    const email_address = 'test questionnaire response' //replace with request 

    result = await ss.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: process.env.QUESTIONNAIRE_ID,
        valueInputOption:"USER_ENTERED",
        resource: {
            values:[
                [email_address]
            ]
        }
    })

    res.sendStatus(result.status)
}


module.exports = {
    postResponse
}