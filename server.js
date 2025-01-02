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

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const userExist = await userModel.findOne({ email });

        if (userExist) {
            res.send({ message: "User Exists" });
        }
        const newUser = new userModel({ name, email, password, phone });
        await newUser.save();
        res.send({ message: "User Created Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server Error" });
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:8000`);
})