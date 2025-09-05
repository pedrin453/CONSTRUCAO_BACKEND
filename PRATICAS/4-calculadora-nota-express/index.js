
const express = require('express')

const app = express()


app.use((req, res, next)=> {
    console.log("------------###---------------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Metodo", req.method)
    console.log("Rota: ", req.url)
    next()
})


app.listen(3000, () => {
    console.log("aplicação rodando em  http://localhost:3000")
})