const express = require('express'); // express imported

const app = express() // server started and stored under a variable


app.get("/login", (req,res) =>{
    res.send("Login Here")
})   // if it get any req on /login it will trigger this function

app.get("/signup",(req,res) =>{
    res.send("SignUpHere")
})  // if it get any req on /signup it will trigger this function

app.listen(3000)