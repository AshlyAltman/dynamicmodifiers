var express     =require("express"),
    router      =express.Router();


var app         =express();


//Roote Route
router.get('/', function(req, res){
    res.render("index.html");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("dynamicmodifiers is Running...")
}
)