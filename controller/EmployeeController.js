const { model } = require("mongoose")
const EmpModel = require("../Model/Employee")
const AddEmployee = (req, res) => {
    let { EmployeeEmail, Age, Gender, Address, Role, EmployeeNumber, EmployeeName,isDeleted } = req.body
    EmpModel.findOne({ EmployeeEmail }).then((data) => {
        if (data) {
            res.send("Employee Already Exist")
        } else {
            const Emdata = new EmpModel({
                EmployeeEmail,
                Age,
                Gender,
                Address,
                Role,
                EmployeeNumber,
                EmployeeName,
                isDeleted




            })

            Emdata.save().then((data) => {
                res.send("Employee Added succesfull")
            }).catch((err) => {
                res.send({ err })
            })
        }
    }).catch((err) => {
        res.send({ err })
    })
}
const DisplayEmployee=(req,res)=>{
    EmpModel.find().then((data)=>{
        if(data){

            res.send({data:data})
        }else{
            res.send({msg:"No Data Found"})
        }
    }).catch((err)=>{
        res.send({err})
    })

}
const UpdateEmployee=(req,res)=>{
    
    EmpModel.updateOne({_id:req.query.id},req.body).then((data)=>{
        
            res.send("data updated")

        
    }).catch((err)=>{
        res.send({err})
    })
}

const DeleteEmployee=(req,res)=>{
    let id=req.query.id
    EmpModel.findOne({_id:id}).then((data)=>{
        if(data){
           
            
            let myobj=data;
            myobj.isDeleted=true
            EmpModel.updateOne({_id:data._id},myobj).then((data)=>{
                res.send({msg:"deleted Sucessfully"})
            }).catch((err)=>{
                res.send({err})
            })

        }else{
            res.send({msg:"error in deletion"})
        }
    }).catch((Err)=>{
        res.send({Err})
    })

}
const hardDelete=(req,res)=>{
    EmpModel.deleteOne({_id:req.query.id}).then((data)=>{
    res.send("deleted succesfully")
}).catch((Err)=>{
    res.send(Err)
})

}
const SoftDeletedEmployee=(req,res)=>{
    EmpModel.find().then((data)=>{
        let flitredEmployee=data.filter((ele)=>(ele.isDeleted!=true))
        res.send({flitredEmployee})

    }).catch((err)=>{
        res.send({msg:"error",err})
    })
}


module.exports={AddEmployee,DisplayEmployee,UpdateEmployee,DeleteEmployee,SoftDeletedEmployee,hardDelete}