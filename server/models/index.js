require('dotenv').config()
const mongoose = require("mongoose")

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.User = require('./user.js')
module.exports.Posting = require('./posting.js')