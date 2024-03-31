const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://krunalmistry7545:krunal2909@cluster0.ea22c9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then((res)=>console.log('db connected'))
.catch((err)=>console.log(err))