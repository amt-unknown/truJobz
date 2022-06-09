const router = require("express").Router();
const res = require("express/lib/response");
const db = require("../models");
const ObjectId = require("mongodb").ObjectId;


const User = require('../models/user.js')

router.get("/", (req, res) => {
    db.Posting.find()
        .populate('owner')
        .then(postings => res.json(postings))
})

router.post('/', (req, res) => {
    db.Posting.create(req.body)
        .then(console.log("New Post successful"))
})

router.put('/:id', (req, res) => {
    db.Posting.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(updatedUser => {
            res.redirect(`/users/${req.params.id}`)
        })
})

router.delete('/:id',(req, res) => {
    db.Posting.findByIdAndDelete(req.params.id)
        .then(res => {
            console.log('User deleted')
        })
});

module.exports = router;