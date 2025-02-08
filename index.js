require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

//all router imports here
const jwtHandler = require('./routes/jwtHandler');
const userHandler = require('./routes/userHandler');

//app and middleware
const app = express();
app.use(express.json());

app.use(cors({
    origin : ['http://localhost:5173'],
    credentials : true,
    optionsSuccessStatus : 200
}));

app.use(cookieParser());

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

//Database connection
const uri = `mongodb+srv://${user}:${pass}@cluster0.pr0dk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
.then(() => {
    console.log(`Database connected`);
})
.catch(err => {
    console.log(`error from db connection ${err}`);
})

//all router here
app.use('/jwt', jwtHandler);
app.use('/users', userHandler)

app.get('/', (req, res) => {
    res.send(`SERVER IS RUNNING`);
})

app.listen(port, () => {
    console.log(`The server is running from ${port}`)
})