const express=require("express")
const Routes=express.Router()
const {Login,Register}=require("../controller/CompanyController")
Routes.post("/Login",Login)
Routes.post("/Register",Register)
module.exports=Routes