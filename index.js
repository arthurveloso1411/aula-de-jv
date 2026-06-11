 const fs = require ('fs')
const dados = fs.readFileSync('dados.json','utf-8');
const usuarios = JSON.parse(dados)

console.log("usuarios cadastrados",usuarios)

usuarios.push( { id: 3, nome: 'Larissa', idade: 15 })
console.log(usuarios)
fs.writeFileSync('dados.json',JSON.stringify(usuarios,null,2))