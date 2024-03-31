const express = require("express")
const Route = express.Router()
const jwt = require("jsonwebtoken")
const { AddEmployee, DisplayEmployee, UpdateEmployee, DeleteEmployee, SoftDeletedEmployee } = require("../controller/EmployeeController")
const isAuth = (req, res, next) => {
    let token = req.headers.authorization.split(" ")[1]
    console.log(token)
    try {

        if (jwt.verify(token, "Company")) {
            next()
        }
        else {
            res.send("Jwt not verify")
        }
    } catch (err) {
        res.send(err)
    }

}
Route.post("/AddEmployee", isAuth, AddEmployee)
Route.get("/DisplayEmployee", isAuth, DisplayEmployee)
Route.put("/UpdateEmployee", isAuth, UpdateEmployee)
Route.get("/SoftDeletedEmployee", isAuth, SoftDeletedEmployee)
Route.delete("/DeleteEmployee", isAuth, DeleteEmployee)



module.exports = Route