// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:

let aluno = {
    nome:"Bruno Rech",
    idade:"16 anos",
    curso:"ADS SENAI"
}
console.log(aluno.nome)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:

let entrega = {
    rua: "Rua Berlim 126",
    cidade:"egito"
}

entrega.endereco = "cep 80200-55"

console.log(entrega.cidade)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:

aluno.habilidades = ["lógica matemática", "futebol", "valorant"]
console.log(aluno.habilidades[0])


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:

aluno.notas = [10, 4, 6]
console.log(`O aluno ${aluno.nome} alcançou as seguintes notas nos exames ${aluno.notas}.`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
let responsavel = {
    nome: "Ana Castela",
    parentesco:"mãe"
   
}

aluno.responsavel
console.log(responsavel.nome)
responsavel.nome = "Pelé"
console.log(responsavel.nome)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:

let LISTA_ALUNOS = ["Pedro","Moller","Careca"]
LISTA_ALUNOS.push(aluno)

let Bolsonaro = {
    nome:"Jair",
    idade:"500 anos",
    curso:"Exercíto",
    notas:[22, 14, 12]
}

let zago = {
    nome:"Macaco",
    idade:"10 anos",
    curso:"Balada",
    notas:[0, 1, 0, 3]
}

LISTA_ALUNOS.push(zago)
LISTA_ALUNOS.push(Bolsonaro)

console.log(LISTA_ALUNOS[1])


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:



let Lista_alunos2 = [zago,Bolsonaro,aluno]

console.log(`Aluno: ${aluno.nome} Notas: ${aluno.notas}.`)
console.log(`Aluno: ${zago.nome} Notas: ${zago.notas}.`)
console.log(`Aluno: ${Bolsonaro.nome} Notas: ${Bolsonaro.notas}.`)



console.log("_______________________________");