const express = require('express')
const route = express.Router()
const {addProject,updateProject,deleteProject,allProject,runnigProject,hardDelete} = require("../controller/projectController")

route.post('/AddProject',addProject)
route.post('/UpdateProject',updateProject)
route.delete('/DeleteProject',deleteProject)
route.delete('/HardDelete',hardDelete)
route.get('/allProject',allProject)
route.get('/runnigProject',runnigProject)


module.exports = route