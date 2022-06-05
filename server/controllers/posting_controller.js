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

module.exports = router;