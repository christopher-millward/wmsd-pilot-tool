const { connection } = require('../middleware/connect_to_SS');

// POST to Gift Card sheet
const sendGiftCard = async (req, res) => {

    const { auth, ss, spreadsheetId } = await connection;
    const email_address = 'testing@testmal.com' //replace with request 

    result = await ss.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: process.env.GIFT_CARD_ID,
        valueInputOption:"USER_ENTERED",
        resource: {
            values:[
                [email_address]
            ]
        }
    })

    res.sendStatus(result.status)
}

// POST to results subscription sheet
const notifyWithResults = async (req, res) => {
    
    const { auth, ss, spreadsheetId } = await connection;
    const email_address = 'testing@testmal.com' //replace with request 

    result = await ss.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: process.env.SHARE_RESULTS_ID,
        valueInputOption:"USER_ENTERED",
        resource: {
            values:[
                [email_address]
            ]
        }
    })

    res.sendStatus(result.status)
}

const notifyOfFutureResearch = async (req, res) => {
    const email_address = 'testing@testmal.com' //replace with request 

    const { auth, ss, spreadsheetId } = await connection;
    result = await ss.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: process.env.FUTURE_STUDIES_ID,
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
    sendGiftCard, 
    notifyWithResults,
    notifyOfFutureResearch
}