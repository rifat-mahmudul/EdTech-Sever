const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

//app and middleware
const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send(`SERVER IS RUNNING`);
})

app.listen(port, () => {
    console.log(`The server is running from ${port}`)
})