const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const { n1, n2, n3, n4 } = req.body

    const media = (n1 + n2 + n3 + n4) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    res.json({ media, mensagem })
})

router.post('/ex2', function (req, res) {

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}
    if (soma > total) {

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores"
        }

        res.status(400).json(retorno)

    } else {
        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = { percBranco, percNulos, percValidos }

        res.status(200).json(retorno)
    }

})

router.post('/ex3', function (req, res) {
    const salarioAtual = Number(req.body.salarioAtual);
    const reajuste = Number(req.body.reajuste);

    //isNan serve para conferir se o valor fornecido é um número, retornando true or false 

    if (isNaN(salarioAtual) || isNaN(reajuste) || salarioAtual < 0 || reajuste < 0) {
        const retorno = {
            codigo: 'DADOS_INVALIDOS',
            mensagem: "Os dados fornecidos são inválidos"
        };
        return res.status(400).json(retorno);
    }

    const novoSalario = salarioAtual * (1 + reajuste / 100).toFixed(2);

    const retorno = {
        novoSalario: novoSalario
    };

    res.status(200).json(retorno);
});

router.post('/ex4', function (req, res) {
    const custoFabrica = Number(req.body.custoFabrica);

    if (isNaN(custoFabrica) || custoFabrica < 0) {
        const retorno = {
            codigo: 'DADOS_INVALIDOS',
            mensagem: "O custo de fábrica fornecido é inválido"
        };
        return res.status(400).json(retorno);
    }

    const percentualDistribuidor = 28;
    const percentualImpostos = 45;

    const custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
    const custoImpostos = custoFabrica * (percentualImpostos / 100);

    const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

    const retorno = {
        custoFinal: custoFinal
    };

    res.status(200).json(retorno);
});

router.post('/ex5', function (req, res) {
    const custo = Number(req.body.custo);
    const percentualDistribuidor = Number(req.body.percentualDistribuidor);
    const percentualImpostos = Number(req.body.percentualImpostos);

    if (isNaN(custo) || custo < 0 || isNaN(percentualDistribuidor) || percentualDistribuidor < 0 || isNaN(percentualImpostos) || percentualImpostos < 0) {
        const retorno = {
            codigo: 'DADOS_INVALIDOS',
            mensagem: "Os dados fornecidos são inválidos"
        };
        return res.status(400).json(retorno);
    }

    const custoDistribuidor = custo * (percentualDistribuidor / 100);
    const custoImpostos = custo * (percentualImpostos / 100);

    const custoFinal = custo + custoDistribuidor + custoImpostos;

    const retorno = {
        custoFinal: custoFinal
    };

    res.status(200).json(retorno);
});

router.post('/ex6', function (req, res) {
    const carrosVendidos = Number(req.body.carrosVendidos);
    const totalVendas = Number(req.body.totalVendas);
    const salarioFixo = Number(req.body.salarioFixo);
    const valorPorCarroVendido = Number(req.body.valorPorCarroVendido);

    if (isNaN(carrosVendidos) || carrosVendidos < 0 || isNaN(totalVendas) || totalVendas < 0 || isNaN(salarioFixo) || salarioFixo < 0 || isNaN(valorPorCarroVendido) || valorPorCarroVendido < 0) {
        const retorno = {
            codigo: 'DADOS_INVALIDOS',
            mensagem: "Os dados fornecidos são inválidos"
        };
        return res.status(400).json(retorno);
    }

    const salarioFinal = salarioFixo + (carrosVendidos * valorPorCarroVendido) + (totalVendas * 0.05);

    const retorno = {
        salarioFinal: salarioFinal
    };

    res.status(200).json(retorno);
});

router.post('/ex7', function (req, res) {
    const nota1 = Number(req.body.nota1);
    const nota2 = Number(req.body.nota2);

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota2 < 0) {
        const retorno = {
            codigo: 'DADOS_INVALIDOS',
            mensagem: "As notas fornecidas são inválidas"
        };
        return res.status(400).json(retorno);
    }

    const mediaFinal = (nota1 * 4 + nota2 * 6) / 10;

    const retorno = {
        mediaFinal: mediaFinal
    };

    res.status(200).json(retorno);
});

router.post('/ex8', function (req, res) {
    const raio = Number(req.body.raio);
    const altura = Number(req.body.altura);

    if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
        const retorno = {
            codigo: 'DADOS_INVALIDOS',
            mensagem: "Os dados fornecidos são inválidos"
        };
        return res.status(400).json(retorno);
    }

    const volume = (Math.PI * Math.pow(raio, 2) * altura).toFixed(2);

    const retorno = {
        volume: volume
    };

    res.status(200).json(retorno);
});

router.post('/ex9', function(req, res){
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        const retorno = {
            codigo: 'DADOS_INVALIDOS',
            mensagem: "Os dados fornecidos são inválidos" 
        };
        return res.status(400).json(retorno);
    }

    const soma = num1 + num2;
    const resultado = soma * num1;

    const retorno = {
        resultado: resultado
    };

    res.status(200).json(retorno);
});





module.exports = router