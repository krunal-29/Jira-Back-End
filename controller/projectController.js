const model = require('../Model/projectSchema')

const addProject = (req,res) =>{
let {ProjectTitle,ProjectDescription,StartDate,EndtDate,Status,Assign,isDeleted}=req.body

      const data =new model({
            ProjectTitle,
            ProjectDescription,
            StartDate,
            EndtDate,
            Status,
            Assign,
            isDeleted
        })
            data.save().then((data2)=>{
                res.send({msg:"data added succesfully",data2    })
            })
            .catch((err)=>{
                res.send({msg:"err0",err})
            })
}


const updateProject = (req,res) =>{

            model.updateOne({_id:req.query.id},req.body).then((data)=>{
                    res.send({msg:"data updated"})
            }) .catch((err)=>{
                res.send(err)
            })
        }
        

        const deleteProject = (req,res) =>{
            console.log(req.query.id)
            let {id}=req.query
            model.findOne({_id:id}).then((data)=>{

                let obj=JSON.parse(JSON.stringify(data))
                obj.isDeleted=true
                model.updateOne({_id:data._id},obj).then((data1)=>{
                    res.send({msg:"delet completed"})
                }).catch((err1)=>{
                    console.log("1")
                    res.send(err1)

                })
            })
            .catch((err)=>{
                console.log("2")

                res.send(err)
            })
        }
const allProject =async (req,res)=>{
    try{

        let data=  await model.find()
        if(data){
            res.send({data})
        }
    }catch(err){
        res.send({err})
    }
}
const runnigProject =async (req,res)=>{
    try{

        let data=  await model.find({isDeleted:false})
        if(data){
            res.send({data})
        }
    }catch(err){
        res.send({err})
    }
}

const hardDelete=(req,res)=>{
    model.deleteOne({_id:req.query.id})
    .then((data)=>{
        res.send({msg:"delete data"})
    })
    .catch((err)=>{
        res.send({msg:"errr",err})
    })
}

module.exports={addProject,updateProject,deleteProject,allProject,runnigProject,hardDelete}