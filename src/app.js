// This file usually used to create servers
// Only important work of this file to create server
const express = require("express")
const app = express()


app.use(express.json())

// storing multiple notes 
const notes = [] 

// creating api to send data to server

app.post('/login',(req,res) =>{

    notes.push(req.body)
    res.status(201).json({
        message: "note created successfully"
    })
    

})






















module.exports = app