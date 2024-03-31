const express = require('express')
const route = express.Router()
const {addProject,updateProject,deleteProject,allProject,runnigProject} = require("../controller/projectController")

route.post('/AddProject',addProject)
route.put('/UpdateProject',updateProject)
route.delete('/DeleteProject',deleteProject)
route.get('/allProject',allProject)
route.get('/runnigProject',runnigProject)


module.exports = route