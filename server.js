const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let messages = [];

// Endpoint to receive messages
app.post('/messages', (req, res) => {
    const message = req.body;
    messages.push(message);
    res.status(201).send(message);
});

// Endpoint to get all messages
app.get('/messages', (req, res) => {
    res.status(200).json(messages);
});

// Serve HTML & CSS
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
