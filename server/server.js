const express = require("express");
const app = express();
const cors = require("cors");

// app.use(express.static(`${__dirname}/../client/build`));

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/user', require("./controllers/users"));

const db = require("./models/index");



app.listen(PORT, () => {

    db.connectToServer(function(err){
        if(err) console.error(err);
    });
    console.log(`Server is running on port:${PORT}`)
    console.log('')
})

// const path = require('path')
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// })