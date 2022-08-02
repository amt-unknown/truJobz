import express, {Request, Response} from "express"

const router = express.Router();
const res = require("express/lib/response");
const db = require("../models");
const ObjectId = require("mongodb").ObjectId;


const User = require('../models/user.js')

router.get("/", (req: Request, res: Response) => {
    db.Posting.find()
        .populate('owner')
        .then((postings:any) => res.json(postings))
})

router.post('/', (req: Request, _res: Response) => {
    db.Posting.create(req.body)
        .then(console.log("New Post successful"))
})

router.put('/:id', (req: Request, res: Response) => {
    db.Posting.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((_updatedUser: any) => {
            res.redirect(`/users/${req.params.id}`)
        })
})

router.delete('/:id',(req: Request, _res: Response) => {
    db.Posting.findByIdAndDelete(req.params.id)
        .then((_res:any) => {
            console.log('User deleted')
        })
});

module.exports = router;