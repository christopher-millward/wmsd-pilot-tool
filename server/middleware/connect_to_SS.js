const { google } = require('googleapis');
require('dotenv').config();

const spreadsheetId = process.env.SPREADHSEET_ID;

const creds = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle newlines in private_key
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    universe_domain: process.env.UNIVERSE_DOMAIN
};

const connection = (async () => {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: creds,
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
