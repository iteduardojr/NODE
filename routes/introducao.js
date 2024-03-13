const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.send('Rota Principal usando Router')
})

router.get('/hello', function(req, res){
    res.send('Ta aqui')
})

router.get('/nome', function(req, res){
    res.send('Edu')
})

module.exports = router