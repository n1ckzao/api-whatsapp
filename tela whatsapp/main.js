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

function mostrarResultado(data){
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`
}