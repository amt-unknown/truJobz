const router = require("express").Router();
const res = require("express/lib/response");
const db = require("../models");
const ObjectId = require("mongodb").ObjectId;

const Posting = require('../models/posting.js')
const userSeedData = require('../seeds/user_seed.js')

router.get("/", (req, res) => {
    db.User.find()
        .populate('postings')
        .then((users) => {
            res.json(users)

        })
        .catch(err => {
            console.log(err)
        })
});

router.get("/:id",(req, res) => {
    db.User.findById(req.params.id)
        .then(foundUser => {
            res.json(foundUser)
        })
        .catch(err => {
            console.log(err)
        })
});

router.get("/name/:name", (req, res) =>{
    db.User.findOne({name: req.params.name})
        .then(foundUser => {
            res.json(foundUser)
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/:id', (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(updatedUser => {
            res.redirect(`/users/${req.params.id}`)
        })
})

router.post('/', (req, res) => {
    db.User.create(req.body)
        .then(() => {
            res.redirect('/user')
        })
})
    
router.delete('/:id',(req, res) => {
    db.User.findByIdAndDelete(req.params.id)
        .then(res => {
            console.log('User deleted')
        })
});

router.get('/data/seed', (req, res) => {
    db.User.insertMany(userSeedData)
        .then(
            console.log('Planted seeds in user collection')
        )
})
    
module.exports = router;