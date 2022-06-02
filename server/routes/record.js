const express = require("express");

const recordRoutes = express.Router();

const db = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record").get(function(req, res) {
    let db_connect = db.getDB("employees");
    db_connect
        .collection("records")
        .find({})
        .toArray(function(err, result){
            if(err) throw err;
            res.json(result);
        });
});

recordRoutes.route("/record/:id").get(function(req, res) {
    let db_connect = db.getDB();
    let myquery = {_id: ObjectId(req.params.id)};
    db_connect
        .collection("records")
        .findOne(myquery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
});

recordRoutes.route("/record/add").post(function(req, response) {
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

recordRoutes.route("/update/:id").post(function (req, response) {
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
    
recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = db.getDB();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});
    
module.exports = recordRoutes;