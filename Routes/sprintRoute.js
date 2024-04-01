const express = require('express')
const rout = express.Router()
const {CreateSprint,UpdateSprint,DisplaySprint} = require('../controller/sprintController')

rout.post('/CreateSprint',CreateSprint)
rout.put('/UpdateSprint',UpdateSprint)
rout.get('/DisplaySprint',DisplaySprint)



module.exports=rout