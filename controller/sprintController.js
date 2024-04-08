const model = require('../Model/sprintSchema')


const CreateSprint = (req, res) => {
    let { Title,
        StartDate,
        EndDate,
        Description } = req.body
    model.findOne({ Title }).then((data) => {
        if (data) {
            res.send({ msg: "Sprint alrady Created" })
        }
        else {

            const sprintSchema = new model({
                Title,
                StartDate,
                EndDate,
                Description
            })
            sprintSchema.save().then((data1) => {
                res.send({ msg: "Sprint Added", data1 })
            }).catch((err) => {
                res.send({ err })
            })
        }
    })
        .catch((err) => {
            res.send({ err })
        })

}


const UpdateSprint = (req, res) => {


    model.updateOne({ Title: req.query.Title }, req.body).then((data) => {
        res.send({ msg: "Sprint Updated", data })
    })
        .catch((err) => {
            res.send({ err })
        })
}

const DisplaySprint = (req, res) => {
    model.find().then((data) => {
        res.send({ data })
    })
        .catch((err) => {
            res.send({ err })
        })

}
const DeleteSprint=(req,res)=>{
    model.deleteOne({_id:req.query.id})
    .then((data)=>{
        res.send({msg:"Sprint Deleted succsesfully",data})
    })
    .catch((err)=>{
        res.send({msg:"errr",err})

    })
}

module.exports = { CreateSprint, UpdateSprint, DisplaySprint ,DeleteSprint}