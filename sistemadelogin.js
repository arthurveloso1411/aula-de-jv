 const prompt = require("prompt-sync")();
const fs = require('fs');

const dados = fs.readFileSync('users.json',"utf-8")
const usuarios = JSON.parse(dados)

console.log('Bem vindoo a programa de cadastro')
const nome = prompt("Digite seu nome: ")

console.log(`Voce digitou o nome ${nome}`)
const idade = parseInt(prompt("digite sua idade: "))

console.log(`Voce digitou a idade  ${idade}`)

const novoUsuario= {
    id: usuarios.length +1,
    nome,
    idade
}

usuarios.push(novoUsuario)

fs.writeFileSync('users.json',JSON.stringify(usuarios,null,2));

console.log(usuarios)