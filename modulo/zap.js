/**************************************************************************************************************************
* Objetivo: Relembrar conceitos a partir de um exercício
* Data:28/01/2025
* Autor: Nickzão
* Versão: 1.0
***************************************************************************************************************************/

var contatos = require('./contatos.js')

const getListaDeDados = function(usuarios){
    let todosContatos = contatos.contatos["whats-users"]
    let contatosEncontrados = todosContatos.find(item => item.number == usuarios.toUpperCase())

    if (contatosEncontrados){
        return {
            id: contatosEncontrados.id,
            nome: contatosEncontrados.account,
            numero: contatosEncontrados.number,
            data_de_criacao: contatosEncontrados['created-since']
        }
    }else{
        return {}
    }
}
const getDadosProfile = function(usuarios){
    let todosContatos = contatos.contatos["whats-users"]
    let contatosEncontrados = todosContatos.find(item => item.number == usuarios.toUpperCase())
    if (contatosEncontrados){
        return {
            nomeUsuario: contatosEncontrados.nickname,
            foto: contatosEncontrados["profile-image"]
        }
    }else{
        return {}
    }
}

const getDadosContatos = function(usuarios){
    let todosContatos = contatos.contatos["whats-users"]
    let contatosEncontrados = todosContatos.find(item => item.number == usuarios.toUpperCase())

    if (contatosEncontrados) {
        return contatosEncontrados.contacts.map(contact => ({
            nome: contact.name,
            foto: contact.image,
            descricao: contact.description
        }))
    } else {
        return []
    }
}
const getListarConversas = function(usuarios) {
    let todosContatos = contatos.contatos["whats-users"]
    let contatosEncontrados = todosContatos.find(item => item.number == usuarios.toUpperCase())

    if (contatosEncontrados) {
        return contatosEncontrados.contacts.map(contact => ({
            nome: contact.name,
            remetente: contact.messages.map(message => message.sender),
            mensagens: contact.messages.map(message => message.content),
            hora: contact.messages.map(message => message.time)
        }))
    } else {
        return []
    }
}

const getConversasPorContato = function(usuario, nomeContato) {
    let todosContatos = contatos.contatos["whats-users"]
    let contatoEncontrado = todosContatos.find(item => item.number == usuario.toUpperCase())

    if (contatoEncontrado) {
        let contato = contatoEncontrado.contacts.find(contact => contact.name.toLowerCase() == nomeContato.toLowerCase())
        
        if (contato) {
            return {
                nome: contato.name,
                mensagens: contato.messages.filter(message => message.sender === 'me' || message.sender == contato.name)
            };
        } else {
            return { error: "Contato não encontrado." }
        }
    } else {
        return { error: "Usuário não encontrado." }
    }
}

const getPalavraChave = function(usuario, nomeContato, palavraChave) {
    let todosContatos = contatos.contatos["whats-users"]
    let contatoEncontrado = todosContatos.find(item => item.number == usuario.toUpperCase())

    if (contatoEncontrado) {
        let contato = contatoEncontrado.contacts.find(contact => contact.name.toLowerCase() == nomeContato.toLowerCase())
        
        if (contato) {
            let mensagensFiltradas = contato.messages.filter(message => 
                message.content.toLowerCase().includes(palavraChave.toLowerCase())
            )

            return {
                nome: contato.name,
                mensagens: mensagensFiltradas
            }
        } else {
            return { error: "Contato não encontrado." }
        }
    } else {
        return { error: "Usuário não encontrado." }
    }
}
//console.log(getListaDeDados('11987876567'))
//console.log(getDadosProfile('11987876567'))
//console.log(getDadosContatos('11987876567'))
//console.log(getListarConversas('11987876567'))
//console.log(getConversasPorContato('11987876567', 'Ana Maria'))
//console.log(getPalavraChave('11987876567', 'Ana Maria', 'beach'))

module.exports = {
    getListaDeDados,
    getDadosProfile,
    getDadosContatos,
    getListarConversas,
    getConversasPorContato,
    getPalavraChave
}