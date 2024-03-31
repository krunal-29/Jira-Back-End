const model = require("../Model/CompanySchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const Login = (req, res) => {
    let { Email, Password } = req.body
    model.findOne({ Email }).then((data) => {

        if (data) {
            let checkPass = bcrypt.compareSync(Password, data.Password)
            
            console.log(checkPass)
            if (data.Email == Email && checkPass) {
                let token = jwt.sign({ Email, Password },"Company")
                res.send({ msg: "login succes", token })
            } else {
                res.send("password or Email MisMatch")
            }

        } else {
            res.send("Register First")
        }


    })





}
const Register = (req, res) => {
    let { Email, Password, Industry, Contact, CompanyName,Repeatpassword } = req.body
    model.findOne({ Email }).then((data) => {
        if (data) {
            res.send("Already Register")
        } else {
            let bcryptypass = bcrypt.hashSync(Password, 10)
            const data = new model({
                Email,
                CompanyName,
                Industry,
                Password: bcryptypass,
                Contact,
                Repeatpassword
            })
            data.save().then((data) => {
                res.send("register succesfully")
            }).catch((err) => {
                res.send(`error in register ${err}`)
            })
        }



    }).catch((err) => {
        res.send({ msg: "error", err })
    })


}

module.exports = { Login, Register }