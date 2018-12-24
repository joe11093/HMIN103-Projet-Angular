//"use strict"

let express = require("express")
let app = express();
let assert = require("assert");
 bodyParser = require('body-parser');
 var ObjectID = require("mongodb").ObjectID;
/*let cors = require("cors")
app.use(cors());*/
app.use(bodyParser());

app.listen(8800);

console.log("server is running");

let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
   let db = client.db("project");
   assert.equal(null, err);


//get one member with filter object
function getUser(param,callback){
  db.collection("member").find(param["filter"]).toArray(function(err,doc){
    console.log("doc:" + doc);
    if (err)
      callback(err,[]);
    else if (doc !== undefined) 
      callback(param["message"],doc);
    else
      callback(param["message"],[]);
  });
}

//get one good with filter object
function getGood(param,callback){
  db.collection("good").find(param["filter"]).toArray(function(err,doc){
    console.log("doc:" + doc);
    if (err)
      callback(err,[]);
    else if (doc !== undefined) 
      callback(param["message"],doc);
    else
      callback(param["message"],[]);
  });
}
//list all members
app.get("/members/list", (req, res) => {
       db.collection("member").find().toArray(function(err, documents) {
            //res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Content-type", "application/json");
	         console.log("/membres : "+JSON.stringify(documents));
            res.end(JSON.stringify(documents));
       });
   }); //end of list all members

//list all goods
app.get("/goods/list", (req, res) => {
       db.collection("good").find().sort({"date":-1}).toArray(function(err, documents) {
            //res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Content-type", "application/json");
	          //console.log("/goods : "+JSON.stringify(documents));
            res.end(JSON.stringify(documents));
       });
   }); //end of goods list

//insert a member into the database
app.post("/members/insert", (req, res) => {

       console.log("req.body: " + req.body.email);
       //tester l'existance de l'email
       db.collection("membres").find({"email":req.body.email}).toArray(function(err,documents){
          

       });
       //data defined directly in node
       db.collection("member").insertOne(
          {
            "email": req.body.email,
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "password": req.body.password,
            "address": req.body.address,
            "city": req.body.city,
            "phone": req.body.phone,
            "role": "user"
          }
        );
   }); //end of member insert

//insert a good into the database
  app.post("/goods/insert", (req, res) => {
    objectToInsert =   {"name": req.body.name,"description": req.body.description,"price": req.body.price,"owner_id": req.body.owner_id, "type": req.body.type, "toRent": req.body.toRent,"toBuy": req.body.toBuy, "date": req.body.date}
    console.log("req.body.name: " + req.body.name);
    console.log("req.body.description: " + req.body.description);
    console.log("req.body.price: " + req.body.price);
    console.log("req.body.owner_id: " + req.body.owner_id);

    db.collection("good").insertOne(objectToInsert, function(err){
      if(err) return;
      console.log("insertedid: " + objectToInsert._id);
    });
    
    //split the keyword string
    var kw_array = req.body.keywords.split(",");
    for(var i = 0; i < kw_array.length; i++){
      //console.log("Kw " + i + " :" + kw_array[i]);
      db.collection("descriptifBiens").insertOne({"good_id": objectToInsert._id, "keyword": kw_array[i]});
    }
    console.log("good inséré ");

  res.end("1"); 
  }); //end of member insert

 //delete one good with filter Id
  app.get("/goods/delete/:id",function(req,res){
    console.log("Server delete Good");

    //db.collection("good").deletOne({})
    db.collection("good", function(err, collection) {
     collection.deleteOne({"_id": new ObjectID(req.params.id)}, 
      function(err, results) {
        if (err){
          console.log("failed");
          throw err;
        }
        console.log("success");
      });
    });
  });


  app.get("/goods/display/:id",function(req,res){
    console.log("dans le serveur: "+  req.params.id);
    
    //"ObjectId("+req.params.id+")"

    db.collection("good").find({"_id": new ObjectID(req.params.id)}).toArray(function(err, documents) {
      //res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-type", "application/json");
      //console.log("/goods With ID : "+JSON.stringify(documents));
      res.end(JSON.stringify(documents));
    });

//db.test.find(ObjectId('4ecc05e55dd98a436ddcc47c'))

  });


/*
//login function with post
app.post("/members/login", (req,res) => {
  //check if email and password exist together in the db
  console.log("NODE: /members/login");
  console.log("req.body: " + req.body.email); 

  let email = req.body.email;
  let password = req.body.password;

  db.collection("member").find({"email": email, "password": password}).toArray(function(err,doc){
    if(doc!==undefined && doc.length==1){
      //console.log("doc from 1: " + JSON.stringify(doc));
        console.log("1");
        res.end("1"); 
    }  
      else{  
          //console.log("doc from 0: " + JSON.stringify(doc))
            console.log("0");
            res.end("0");
          }
  });

});//end of members/login

*/

//login function with get
app.get("/members/login/:mail/:password",function(req,res){

  let filter = {'email' : req.params.mail, 'password' : req.params.password};

  getUser({"message" : "/member","filter" : filter}, function(step, results){
    res.setHeader("Content-type","application/json; charset = UTF-8");
    let json = JSON.stringify(results);
    console.log("json: " + json);
    res.end(json);
  });
});


app.get("/goods/types",function(req,res){
    console.log("Server: /goods/types");

    db.collection("good").distinct("type", function(err, docs){
      console.log(JSON.stringify(docs));
      res.setHeader("Content-type", "application/json");
      res.end(JSON.stringify(docs));
    });
});

app.get("/goods/search/:type/:maxprice/:toBuy/:toRent/:keywords",function(req,res){
  //filter for the find
  var filter = {};
  var kwsearch;
  var criteriasearch;
  console.log(req.params);
  if(req.params.type !== "*")
    filter["type"] = req.params.type;

  if(req.params.maxprice !== "*")
    filter["price"] = {$lt:parseInt(req.params.maxprice)};

  if(req.params.toBuy === 'false')
    filter["toBuy"] = null;
  else
    filter["toBuy"] = true;

  if(req.params.toRent === 'false')
    filter["toRent"] = null;
  else
    filter["toRent"] = true;

  console.log("filter: " + JSON.stringify(filter));

    db.collection("good").find(filter).toArray(function(err,documents){
    res.setHeader("Content-type", "application/json");
           
           if(req.params.keywords === "*"){
              console.log("/goods/search : "+JSON.stringify(documents));
              res.end(JSON.stringify(documents));
              criteriasearch = documents;
           }
           else{
            console.log("keywords search");
            array_kw = req.params.keywords.split(",");
           /* for(var i = 0; i < array_kw.length; i++){
              console.log(array_kw[i]);
            }*/

            var or_kw = [];;
            for(var i = 0; i < array_kw.length; i++){
              or_kw.push({"keyword":array_kw[i]});
            }
            //db.descriptifBiens.distinct("good_id",{$or:[{"keyword": "iphone"},{"keyword":"gadget"},{"keyword":"phone"}]})
            db.collection("descriptifBiens").distinct("good_id",{$or:or_kw},
                function(err, docs){
                  console.log("docs: " + JSON.stringify(docs));
                  //res.setHeader("Content-type", "application/json");
                  //res.end("DISTINCT: " + JSON.stringify(docs));
                  kwsearch = docs;
                  for(var it = 0; it < docs.length; it++){
                    filter = {"_id":docs[it]};
                    console.log("filter-good: " + filter);
                    getGood({"message" : "/member","filter" : filter}, function(step, results){
                      //res.setHeader("Content-type","application/json; charset = UTF-8");
                      let json = JSON.stringify(results);
                      console.log("json: " + json);
                       res.end(json);
                    });
                  }
            });

         
           }
          console.log("criteriasearch" + criteriasearch);
          console.log("kwsearch" + kwsearch);
            
  });


});

//insert a service into the database
  app.post("/services/insert", (req, res) => {

    console.log("req.body.name: " + req.body.name);
    console.log("req.body.description: " + req.body.description);
    

    db.collection("service").insertOne(
      {
        "name": req.body.name,
        "description": req.body.description,
      }
    );
  console.log("service inséré ");

  res.end("1"); 
  }); //end of service insert

//list all services
app.get("/services/list", (req, res) => {
       db.collection("service").find().toArray(function(err, documents) {
            //res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Content-type", "application/json");
            console.log("/services : "+JSON.stringify(documents));
            res.end(JSON.stringify(documents));
       });
   }); //end of services list

  //get one service with filter Id
  app.get("/services/display/:id",function(req,res){
    console.log("dans le serveur: "+  req.params.id);
    db.collection("service").find({"_id": new ObjectID(req.params.id)}).toArray(function(err, documents) {
      //res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-type", "application/json");
      console.log("/services With ID : "+JSON.stringify(documents));
      res.end(JSON.stringify(documents));
    });

  });

  //delete one service with filter Id
  app.get("/services/delete/:id",function(req,res){
    console.log("Server delete service");

    //db.collection("good").deletOne({})
    db.collection("service", function(err, collection) {
     collection.deleteOne({"_id": new ObjectID(req.params.id)}, 
      function(err, results) {
        if (err){
          console.log("failed");
          throw err;
        }
        console.log("success");
      });
    });
  });
});//end of code
