const express=require("express")
const app=express()
require('./Model/Dbconfig')
app.use(express.json())
const UserRoute=require("./Routes/User")
const projectRoute = require('./Routes/projectroute')
const CompanyRoutes = require('./Routes/Company')
const employeroute = require('./Routes/Employeroute')

app.use("/User",UserRoute)
app.use('/Project',projectRoute)
app.use('/Compny',CompanyRoutes)
app.use('Employe',employeroute)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
  });

app.listen(5000,()=>{
    console.log("port is run on  3000")
})