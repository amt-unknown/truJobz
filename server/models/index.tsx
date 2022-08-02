import dotenv from 'dotenv'
import mongoose, {connect} from 'mongoose'

let URI = process.env.ATLAS_URI || ""

connect(URI)

module.exports.User = require('./user.tsx')
module.exports.Posting = require('./posting.tsx')