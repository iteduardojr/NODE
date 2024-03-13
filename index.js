// const express = require('express')
// const app = express()

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get('/', function(req, res){
//     res.send('Rota principal')
// })
// app.get('/hello', function(req, res){
//     res.send('Chegou a resposta')
// })
// app.get('/nome', function(req, res){
//     res.send('Eduardo a resposta')
// })

// app.post('/list1/ex1', function(req, res){

//     const total = Number(req.body.total)
//     const brancos = Number(req.body.brancos)
//     const nulos = Number(req.body.nulos)
//     const validos = Number(req.body.validos)

    

//     const soma = brancos + nulos + validos 

//     let retorno = {}

//     if(soma > total){
//         retorno = {
//         codigo: 'Soma_Eleitores',
//         mensagem:"Error a soma dos votos não pode passar a quantidade total dos eleitores"
//         }

//         res.status(400).json(retorno)

//     } else{

//     const percBranco= brancos / total * 100
//     const percNulos = nulos / total * 100
//     const percValidos = validos / total * 100

//     retorno = {percBranco,percNulos,percValidos}

  
//     // console.log("A quantidade de votos Brancos foi:" + brancos + ' ' + "E isso gerou" + ' ' + percentualBranco + '%' + ' ' + "Do total" )
//     // console.log("A quantidade de votos nulos foi:" + nulos + ' ' + "E isso gerou" + ' ' + percentualNulos + '%' + ' ' + "Do total" )
//     // console.log("A quantidade de votos Válidos foi:" + validos + ' ' + "E isso gerou" + ' ' + percentualValidos + '%' + ' ' + "Do total" )

//     }

//     res.status(200).json(retorno)
// })


// app.listen(3000, function(){
//     console.log('Server UP port 3000')
// })

const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const introducao = require('./routes/introducao')
app.use('/', introducao)

const lista1 = require('./routes/lista1')
app.use('/lista1', lista1)

const lista2 = require('./routes/lista2')
app.use('/lista2', lista2)





app.listen(3000, function(){
    console.log('Server UP port 3000')
})