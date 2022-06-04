const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./controllers/users"));

const db = require("./models/index");

app.listen(PORT, () => {

    db.connectToServer(function(err){
        if(err) console.error(err);

    });
    console.log(`Server is running on port: ${PORT}`)
    console.log('')
})