const express = require("express")
const Route = express.Router()
const jwt = require("jsonwebtoken")
const { AddEmployee, DisplayEmployee, UpdateEmployee, hardDelete,DeleteEmployee, SoftDeletedEmployee } = require("../controller/EmployeeController")
// const isAuth = (req, res, next) => {
//     let token = req.headers.authorization.split(" ")[1]
//     console.log(token)
//     try {

//         if (jwt.verify(token, "Company")) {
//             next()
//         }
//         else {
//             res.send("Jwt not verify")
//         }
//     } catch (err) {
//         res.send(err)
//     }

// }
Route.post("/AddEmployee", AddEmployee)
Route.get("/DisplayEmployee", DisplayEmployee)
Route.put("/UpdateEmployee", UpdateEmployee)
Route.get("/SoftDeletedEmployee", SoftDeletedEmployee)
Route.delete("/DeleteEmployee", DeleteEmployee)
Route.delete("/hardDelete",hardDelete)



module.exports = Route