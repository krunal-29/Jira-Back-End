const mongoose = require('mongoose')

const sprintmodel = mongoose.Schema({
    Title:{
        type:String
    },
    StartDate:{
        type:Date
    },
    EndDate:{
        type:Date
    },
    Description:{
        type:String
    },
})


module.exports=mongoose.model('sprintmodel',sprintmodel)