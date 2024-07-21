const { connection } = require('../middleware/connect_to_SS');

const postResponse = async (req, res)=>{    

    // Connect to spreadsheet
    const { auth, ss, spreadsheetId } = await connection;

    // Sort to ensure they're always in the same order
    const sortedData = Object.keys(req.body.data)
        .sort()
        .reduce((acc, key) => ({ ...acc, [key]: req.body.data[key] }), {});

    // return just the values, not the keys
    const response_values = Object.values(sortedData)

    result = await ss.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: process.env.QUESTIONNAIRE_ID,
        valueInputOption:"USER_ENTERED",
        resource: {
            values:[
                response_values
            ]
        }
    })

    res.sendStatus(result.status)
}


module.exports = {
    postResponse
}