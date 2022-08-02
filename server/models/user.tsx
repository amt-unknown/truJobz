import mongoose from 'mongoose'
const { Schema } = mongoose



const userSchema = new mongoose.Schema(
    {
        name: { type: String, require: true},
        title: { type: String },
        company: { type: String},
        info: {type: String},
        profileImg: {type: String},
        lastLogin: {type: Date}
    },{
        toJSON: {virtuals: true}
    }
)

userSchema.virtual('postings',{
    ref: "Posting", 
    localField: '_id', 
    foreignField: 'owner'
})

module.exports = mongoose.model("User", userSchema)