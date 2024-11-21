const express = require('express');
const Africastalking = require('africastalking');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

// Parse JSON bodies
app.use(bodyParser.json());

// Africa's Talking credentials
const credentials = {
    apiKey: '699f3fb76bca880163fbe357c9c3758a33cd50b160c6cf9911b726f2287adcc1', // Replace with your actual API key
    username: 'kevann', // Replace with your actual username
};
const africasTalking = Africastalking(credentials);
const sms = africasTalking.SMS;

// Endpoint to send SMS
app.post('/send-sms', (req, res) => {
    // Ensure that the request body contains the necessary fields
    const { to, message } = req.body;

    if (!to || !message) {
        return res.status(400).json({ error: 'Missing "to" or "message" in request body.' });
    }

    const options = {
        to: to, // This should be an array of phone numbers
        message: message,
    };

    // Send the SMS using Africa's Talking API
    sms.send(options)
        .then(response => {
            // Send back the response from Africa's Talking
            res.json(response);
        })
        .catch(error => {
            // Handle any errors that occur during the SMS sending process
            console.error('Error sending SMS:', error); // Log the error for debugging
            res.status(500).json({ error: error.message });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});