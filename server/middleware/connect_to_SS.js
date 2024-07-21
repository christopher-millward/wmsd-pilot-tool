const { google } = require('googleapis');
require('dotenv').config();

const spreadsheetId = process.env.SPREADHSEET_ID;

const connection = (async () => {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: "./credentials.json",
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });

        const client = await auth.getClient();
        const ss = google.sheets({ version: "v4", auth: client });

        return { auth, ss, spreadsheetId };
    } catch (error) {
        console.error('Error creating auth client', error.message);
        throw error;
    }
})();

module.exports = { connection };
