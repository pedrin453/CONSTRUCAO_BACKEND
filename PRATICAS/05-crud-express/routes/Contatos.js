const express = require('express')

const router = express.Router()

let contatos = ["João, Maria"]

router.get('/contatos', (req, res, next) => {
    res.json(contatos)
})

router.post('/contatos', (req, res, next) => {
    const { nome } = req.body
    //validações
    if(!nome){
        return res.status(400).json({ error: "nome é obrigatorio!!!" })
    }
    if(contatos.includes(nome)){
        return res.status(400).json({error: "Contato já existe!!!"})
    }
    contatos.push(nome)
    res.status(201).json({ message: "contato já cadastrado com sucesso"})
})

router.delete("/contatos/:nome", (req, res, next) => {
    const nome = req.params.nome
    contatos = contatos.filter(contato => contato != nome)
    res.json({message: "Contato excluido"})
})

router.delete("/contatos", (req, res, next) => {
    contatos = []
    res.json({ message: "Todos os contatos foram excluidos!!"})
})


module.exports = router