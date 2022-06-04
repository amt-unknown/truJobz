const { MongoClient } = require("mongodb");
const DB = process.env.ATLAS_URI ;
const client = new MongoClient(DB,
     {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function(err, db){

            if(db){
                _db = db.db("empolyees");
                console.log("Successfully connected to MongoDB.")
            } 

            return callback(err);
        });
    },

    getDB: function () {
        return _db;
    },
};