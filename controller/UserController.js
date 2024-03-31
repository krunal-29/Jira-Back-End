const modal = require('../Model/UserSchema')
const bycript  = require('bcrypt')
const jwt = require('jsonwebtoken')
const Register=(req,res)=>{
    let {Name,Gender,Email,Password,Designation,Age,RepeatPassword,Contact}=req.body

   let bycriptpass = bycript.hashSync(Password,10)

    modal.findOne({Email:Email}).then((data)=>{
        if (data) {
            res.send({msg:"already registerd"})
            
        }
        else{

            const data=new modal({
                Name,
                Gender,
                Email,
                Designation,
                Age,
                Password:bycriptpass,
                RepeatPassword:bycriptpass,
                Contact
            })
            
            data.save().then((dbdata)=>{
                res.send({msg:"success",data})
            })
            .catch((err)=>{
                res.send({err})
            })
        }

    }).catch((err)=>{
       
    })
    

}
const Login=(req,res)=>{
    let {Email,Password} = req.body

    modal.findOne({Email}).then((data)=>{
        let verfiy=bycript.compareSync(Password,data.Password)
        console.log(verfiy)
        if (Email == data.Email && verfiy) {
            let tokan = jwt.sign({Email,Password},'user')
            res.send({msg:"Login Success",tokan})
        }
        else{
            res.send({msg:"not matched"})
        }
    }).catch((Err)=>{
        res.send({Err})
    })
}
module.exports={Register,Login} 