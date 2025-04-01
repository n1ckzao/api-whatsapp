/**************************************************************************************************************************
* Objetivo: Api para retornar dados de whatsapp
* Data:11/02/2025
* Autor: Nicolas
* Versão: 2.0
***************************************************************************************************************************/

const { request, response } = require('express')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')
    app.use(cors())
    next()
})
const dadosWhatsapp = require('./modulo/zap.js')
app.get('/v1/whatsapp/dados-pessoais/:numero', cors(), async function(request, response){

    let zap = request.params.numero.toUpperCase()
    let dados = dadosWhatsapp.getListaDeDados(zap)

    response.status(200)
    response.json(dados)
})

app.get('/v1/whatsapp/dados-profile/:numero', cors(), async function(request, response){

    let zap = request.params.numero.toUpperCase()
    let dados = dadosWhatsapp.getDadosProfile(zap)

    response.status(200)
    response.json(dados)
})
app.get('/v1/whatsapp/dados-contatos/:numero', cors(), async function(request, response){

    let zap = request.params.numero.toUpperCase()
    let dados = dadosWhatsapp.getDadosContatos(zap)

    response.status(200)
    response.json(dados)
})
app.get('/v1/whatsapp/lista-conversas/:numero', cors(), async function(request, response){

    let zap = request.params.numero.toUpperCase()
    let dados = dadosWhatsapp.getListarConversas(zap)

    response.status(200)
    response.json(dados)
})
app.get('/v1/conversas-contatos/:numero/:contato',cors, async function name(request, response){
    let zap = request.params.numero.toUpperCase()
    let dados = estadosCidades.getConversasPorContato(zap)
    
    if (dados){
    response.status(200)
    response.json(dados)
    }else{
    response.status(404)
    response.json({'status':404, 'message': 'Não foi encontrado um estado'})
    }
})
app.get('/v1/palavra-chave/:numero/:contato/:palavra',cors, async function name(request, response){
    let zap = request.params.numero.toUpperCase()
    let dados = estadosCidades.getConversasPorContato(zap)
    
    if (dados){
    response.status(200)
    response.json(dados)
    }else{
    response.status(404)
    response.json({'status':404, 'message': 'Não foi encontrado um estado'})
    }
})
app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições...')
})


