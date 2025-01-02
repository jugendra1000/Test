const express = require('express');
const path = require('path');
const connectDb = require('./config/db');
const userModel = require('./userSchema/userSchema');

const app = express();
// connectDb();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, './public/signup.html'));
})

app.post('/signup', (req, res) => {
    const { name, email, password, phone } = req.body;
    res.json(name, email, password, phone);
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:8000`);
})