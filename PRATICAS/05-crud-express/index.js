const express = require('express')
const cors = require('cors')
//crio uma instancia para aplicação
const app = express()

//intermediarios
app.use(cors())
app.use(express.json())


//roteadores

const contatosRouter = require('./routes/Contatos')
app.use(contatosRouter)


// executar aplicação
app.listen(3000, () =>{
    console.log("Aplicação rodando em http://localhost:3000")
})