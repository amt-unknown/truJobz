const express = require("express");
const app = express();
const cors = require("cors");

// app.use(express.static(`${__dirname}/../client/build`));

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const userController = require( './controllers/user_controller.js');
app.use('/user', userController);

const postingController = require('./controllers/posting_controller.js')
app.use('/posting', postingController)

const db = require("./models/index");



app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
    console.log('')
})

// const path = require('path')
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// })