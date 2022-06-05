const mongoose = require('mongoose')
const { Schema } = mongoose



const userSchema = new mongoose.Schema(
    {
        name: { type: String, require: true},
        title: { type: String },
        company: { type: String},
        info: {type: String}
    },{
        toJSON: {virtuals: true}
    }
)

userSchema.virtual('posting',{
    ref: "Posting", 
    localField: '_id', 
    foreignField: 'owner'
})

module.exports = mongoose.model("User", userSchema)