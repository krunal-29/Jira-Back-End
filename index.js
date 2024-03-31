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


app.listen(3000,()=>{
    console.log("port is run on  3000")
})