const prompt = require("prompt-sync")();
const fs = require('fs');

const dados = fs.readFileSync('users.json',"utf-8")
const usuarios = JSON.parse(dados)

const nome = prompt("digite seu nome")
const idade = parseInt(prompt("digite sua idade"))

const novoUsuario = {
    
}
