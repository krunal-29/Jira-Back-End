const Mongoose=require("mongoose")
const Employee=Mongoose.Schema({
EmployeeName:{
    type:String,
    required:true

},
Age:{
    type:Number,
    required:true
},
Gender:{
    type:String,
    required:true
},
Address:{
    type:String,
    required:true
},
Role:{
    type:String,
    required:true
},
EmployeeEmail:{
    type:String,
    required:true
},
EmployeeNumber:{
    type:Number,
    required:true
},
isDeleted:{
    type:Boolean,
    // required:true
}


})

module.exports=Mongoose.model("Employee",Employee)