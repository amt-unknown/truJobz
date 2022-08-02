import express, {Request, Response} from 'express'

const router = express.Router();
const res = require("express/lib/response");
const db = require("../models");
// const ObjectId = require("mongodb").ObjectId;

// const Posting = require('../models/posting.js')
const userSeedData = require('../seeds/user_seed.js')

router.get("/", (req: Request, _res: Response) => {
    db.User.find()
        .populate('postings')
        .then((users: any) => {
            res.json(users)

        })
        .catch((err: any) => {
            console.log(err)
        })
});

router.get("/:id",(req: Request, _res: Response) => {
    db.User.findById(req.params.id)
        .populate('postings')
        .then((foundUser: any) => {
            res.json(foundUser)
        })
        .catch((err: any) => {
            console.log(err)
        })
});

router.get("/name/:name", (req: Request, _res: Response) =>{
    db.User.findOne({name: req.params.name})
        .populate('postings')
        .then((foundUser: any) => {
            res.json(foundUser)
        })
        .catch((err: any) => {
            console.log(err)
        })
})

router.put('/:id', (req: Request, _res: Response) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((updatedUser: any) => {
            res.redirect(`/users/${req.params.id}`)
        })
})

router.post('/', (req: Request, _res: Response) => {

    //FIX UNIQUE USER CREATION
    
    db.User.create(req.body)
        .then(() => {
            res.redirect('/user')
        })
})
    
router.delete('/:id',(req: Request, _res: Response) => {
    db.User.findByIdAndDelete(req.params.id)
        .then((res: any) => {
            console.log('User deleted')
        })
});

router.get('/data/seed', (req: Request, _res: Response) => {
    db.User.insertMany(userSeedData)
        .then(
            console.log('Planted seeds in user collection')
        )
})
    
module.exports = router;