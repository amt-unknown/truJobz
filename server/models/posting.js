const mongoose = require('mongoose')
const { Schema } = mongoose

const User = require('./user')


const salary= new mongoose.Schema({
    salaryType: {
        type: String,
        enum: ["Hourly", "Yearly"],
    },
    minSalary: {
        type: Number,
        min: 0,
    },
    maxSalary: {
        type: Number,
        min: 0,
    }
})

const postingSchema = new mongoose.Schema(
    {
        title: { type: String, require: true},
        company: { type: String},
        salary: {type: salary, default: {}},
        info: {type: String},
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },{ 
        toJSON: {virtuals: true}
})

postingSchema.post('findOneAndDelete', () => {

})

postingSchema.virtual('submissions',{
    ref: "User", 
    localField: '_id', 
    foreignField: 'applications'
})

module.exports = mongoose.model("Posting", postingSchema)