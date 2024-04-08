const express = require('express')
const rout = express.Router()
const {CreateSprint,UpdateSprint,DisplaySprint,DeleteSprint} = require('../controller/sprintController')

rout.post('/CreateSprint',CreateSprint)
rout.post('/UpdateSprint',UpdateSprint)
rout.get('/DisplaySprint',DisplaySprint)
rout.get('/DeleteSprint',DeleteSprint)




module.exports=rout