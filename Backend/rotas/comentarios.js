const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
    res.json({
        conteudo: 'Pronto, Falei',
        autor: 'Leonardo Neves'
    })
})

module.exports = router