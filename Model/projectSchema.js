const mongoose = require('mongoose')

const prjectSchema = mongoose.Schema({
     ProjectTitle:{
         type:String,
         required:true
   } ,
   ProjectDescription:{
        type:String,
        required:true
   },
   StartDate:{
        type: Date,
        required:true
   },
   EndtDate:{
        type: Date,
        required:true
    },
    Status:{
        type: String,
        required:true
    },
    Assign:{
     type: String,
        required:true
    },
    isDeleted:{
     type: Boolean,
     // required:true
 }
})

module.exports=mongoose.model("prjectSchema",prjectSchema)