require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

//app and middleware
const app = express();
app.use(express.json());
app.use(cors());

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

//Database connection
const uri = `mongodb+srv://${user}:${pass}@cluster0.pr0dk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
.then(() => {
    console.log(`Database connected`);
})
.catch(err => {
    console.log(`error from db connection ${err}`);
})


app.get('/', (req, res) => {
    res.send(`SERVER IS RUNNING`);
})

app.listen(port, () => {
    console.log(`The server is running from ${port}`)
})