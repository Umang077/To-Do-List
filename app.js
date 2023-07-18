const express =require("express");
const bodyParser=require("body-parser");
const date=require( __dirname+"/date.js");

const app=express();

// var item="";
// This will only allow replacing a new bullet point 
//by the point you have written earlier

var items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    // var day="";
    // if(today.getDay()===6 || today.getDay()===0){
    //     // day="weekend";
    //     // res.write("<h1>Yay It's the weekend!</h1>");
    // }else{
    //     // res.write("<h1>Boo!! I have to work!</h1>");
    //     // res.write("<p>Shit!! We have work to do!!</p>");
    //     // res.send();
    //     // day="weekday";
    //     // res.sendFile(__dirname+"/index.html");
    //  }


    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // day=weekday[today.getDay()];

    // ALternate way of writing days are:

    // var currentDay=today.getDay();
    // switch (currentDay) {
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tueday";
    //         break;    
    //     case 3:
    //          day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    //     default:
    //         break;
    // }

    let day =date.getdate();
    // let day=date.getDay();
    res.render("list",{listTitle:day,newListItems: items}); 
});

app.post("/",function(req,res){
    //This will generate error
    // var item=req.body.newItem;

    // improved 1
    
    // item=req.body.newItem;

    //imporved 2
    let item=req.body.newItem;
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
      items.push(item);
      res.redirect("/");  
    }
    


    // console.log(item);
    // This will generate error
    // res.render("list",{newListItem: item});
    res.redirect("/");


});
app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List",newListItems:workItems}); 
});
app.post("/work",function(req,res){
    let item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});
app.get("/about",function(req,res){
    res.render("about");
})




app.listen(3000,function(){
    console.log("Server started on port 3000");
})