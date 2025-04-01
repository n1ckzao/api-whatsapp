'use strict'

const apiBaseUrl = "http://localhost:8080/v1/whatsapp"

function buscarDadosPessoais(){
    let numero = document.getElementById("numero").value.trim()
    if (!numero){
        alert("Digite um número!")
        return
    }

    fetch(`${apiBaseUrl}/dados-pessoais/${numero}`)
        .then(response => response.json())
        .then(data => mostrarResultado(data))
        .catch(error => console.error("Erro:", error))
}

function buscarDadosProfile(){
    let numero = document.getElementById("numero").value.trim()
    if (!numero){
        alert("Digite um número!")
        return
    }

    fetch(`${apiBaseUrl}/dados-profile/${numero}`)
        .then(response => response.json())
        .then(data => mostrarResultado(data))
        .catch(error => console.error("Erro:", error))
}

function buscarContatos(){
    let numero = document.getElementById("numero").value.trim()
    if (!numero) {
        alert("Digite um número!")
        return
    }

    fetch(`${apiBaseUrl}/dados-contatos/${numero}`)
        .then(response => response.json())
        .then(data => mostrarResultado(data))
        .catch(error => console.error("Erro:", error))
}

function buscarConversas(){
    let numero = document.getElementById("numero").value.trim()
    if (!numero) {
        alert("Digite um número!")
        return
    }

    fetch(`${apiBaseUrl}/lista-conversas/${numero}`)
        .then(response => response.json())
        .then(data => mostrarResultado(data))
        .catch(error => console.error("Erro:", error))
}

function buscarConversasPorNome(){
    let numero = document.getElementById("numero").value.trim()
    let contato = document.getElementById("contato").value.trim()

    if (!numero || !contato) {
        alert("Digite o número e o nome do contato!")
        return
    }
    fetch(`${apiBaseUrl}/conversas-contatos/${numero}/${contato}`)
        .then(response => response.json())
        .then(data => mostrarResultado(data))
        .catch(error => console.error("Erro:", error))
}
function buscarPorPalavraChave() {
    let numero = document.getElementById("numero").value.trim()
    let contato = document.getElementById("contato").value.trim()
    let palavra = document.getElementById("palavra").value.trim()

    if (!numero || !contato || !palavra) {
        alert("Digite o número, o nome do contato e a palavra-chave!")
        return;
    }

    fetch(`${apiBaseUrl}/palavra-chave/${numero}/${contato}/${palavra}`)
        .then(response => response.json())
        .then(data => {
            const resultadoFiltrado = data.filter(conversa => {
                return conversa.mensagem && conversa.mensagem.includes(palavra)
            })
            mostrarResultado(resultadoFiltrado)
        })
        .catch(error => console.error("Erro:", error))
}
function mostrarResultado(data){
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`
}