const mongoose = require('mongoose')

const sprintmodel = mongoose.Schema({
    Title:{
        type:String
    },
    StartDate:{
        type:String
    },
    EndDate:{
        type:String
    },
    Description:{
        type:String
    },
})


module.exports=mongoose.model('sprintmodel',sprintmodel)