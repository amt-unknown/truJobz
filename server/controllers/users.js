const router = require("express").Router();

const db = require("../models");
const ObjectId = require("mongodb").ObjectId;

router.route("/user").get(function(req, res) {
    let db_connect = db.getDB("empolyees");
    db_connect
        .collection("records")
        .find({})
        .toArray(function(err, result){
            if(err) throw err;
            res.json(result);
        });
});

router.route("/user/:id").get(function(req, res) {
    let db_connect = db.getDB();
    let myquery = {_id: ObjectId(req.params.id)};
    db_connect
        .collection("records")
        .findOne(myquery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
});

router.route("/user/add").post(function(req, response) {
    let db_connect = db.getDB();
    let myobj = {
        name: req.body.name,
        position: req.body.position, 
        level: req.body.level,
    };
    db_connect.collection("records").insertOne(myobj, function(err, res){
        if(err) throw err;
        response.json(res);
    })
})

router.route("/update/:id").post(function (req, response) {
    let db_connect = db.getDB(); 
    let myquery = { _id: ObjectId( req.params.id )}; 
    let newvalues = {   
        $set: {     
            name: req.body.name,    
            position: req.body.position,     
            level: req.body.level,   
        }, 
     };
});
    
router.route("/:id").delete((req, response) => {
    let db_connect = db.getDB();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});
    
module.exports = router;