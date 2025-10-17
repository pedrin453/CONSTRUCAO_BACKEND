const express = require('express')
const mongoose = require('express')
const dotenv = require('dontev')


const app = express()


app.use(express.json())


mongoose.connect('mongodb+srv://pedrofss:3vevnQspw9wmOt31@cluster0.woqx6ir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
 .then(() =>{
    console.log("Conectado mongoDB")
 })
  .catch(err =>{
    console.log("erro ao conectar mongoDB: ", err)
})
