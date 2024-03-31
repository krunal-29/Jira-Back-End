const { default: mongoose } = require("mongoose")
const Mongoose=require("mongoose")
const Company=Mongoose.Schema({
CompanyName:{
    type:String,
    required:true
},
Industry:{
    type:String,
    required:true
},
Contact:{
    type:Number,
    required:true
},
Email:{
    type:String,
    required:true
},
Password:{
    type:String,
    required:true
}


})

module.exports=mongoose.model("Compnay",Company)