// This file usually used to create servers
// Only important work of this file to create server

const express = require("express")
const app = express()

app.use(express.json())

const notes = []
app.post('/notes',(req,res) =>{
    console.log(req.body)
})


module.exports = app