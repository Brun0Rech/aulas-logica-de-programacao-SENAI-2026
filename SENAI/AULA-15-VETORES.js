// ============================================================
//   ATIVIDADE 12 – Estruturas de Dados: Vetor (Array)
// ============================================================

// Dica: Faça os exercícios utilizando funções de array,
//       mas também tente resolver os desafios sem essas funções

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

// → Seu código aqui:

let cidades = ["jaragua","itapema","bombinhas","penha","joinvile"]


for(const cidade of cidades){
    console.log(cidade)
    console.log(`primeira cidade: ${cidades[0]}`)
    console.log(`ultima cidade: ${cidades[cidades.length-1]}`)
    console.log(`total de cidades: ${cidades.length}`)

}


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Soma e média
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
// b) Calcule a SOMA de todos os números.
// c) Calcule a MÉDIA (soma / quantidade).
// d) Exiba: "Soma: <soma> | Média: <média>" (use toFixed(2) na média).

// → Seu código aqui:

let soma = 0
let media = 0

for(const numero of numeros){
    soma += numero
    media = soma / numeros.length
    console.log(`Soma: ${soma} | Média: ${media}`)
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
// b) Encontre a MAIOR e a MENOR temperatura.
// c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

// → Seu código aqui:

let maior = temperaturas[0]
let menor = temperaturas[0]

for(const temperatura of temperaturas){
    for(let i = 1; temperatura[i] > maior; i++){
        maior = temperatura[i]
        console.log(`maior temperatura: ${maior}`)
    }
    for(let i = 1; temperatura[i] < menor; i++){
        menor = temperatura[i]
        console.log(`menor temperatura: ${menor}`)
    }
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Pares e ímpares
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
// b) Conte quantos números são pares e quantos são ímpares.
// c) Crie dois vetores: paresVetor[] e imparesVetor[], e adicione os números em cada um.
// d) Exiba:
//    "Pares (<qtd>): <paresVetor>"
//    "Ímpares (<qtd>): <imparesVetor>"

// → Seu código aqui:

let pares = []
let impares = []

for(const numero of numeros){
    if(numero % 2 === 0){
        pares.unshift(numero)
        console.log(`pares: ${pares}`)
    } else {
        impares.unshift(numero)
        console.log(`impares: ${impares}`)
    }
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Inversão de vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const original = ["A", "B", "C", "D", "E"];
// b) Usando for(), crie um novo vetor 'vetorInvertido' com os elementos em ordem reversa.
// c) Exiba ambos os vetores:
//    "Original:  <original>"
//    "Invertido: <invertido>"
// d) Inverta o vetorOriginal, mas utilizando função de array,
//    salve o resultado em vetorInvertido2 e exiba o resultado.

// → Seu código aqui:

let invertido = []

for(let i = 1; i < original.length; i++){
    invertido.push(original[original.length-i])
    console.log(`invertido: ${invertido}`)
}

let invertido2 = original.reverse()

console.log(invertido2)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Cadastro dinâmico
// ------------------------------------------------------------
// a) Crie um vetor vazio para produtos;
// b) Pergunte ao usuário quantos produtos deseja cadastrar.
// c) Usando for(), peça o nome de cada produto e adicione ao vetor.
// d) Ao final, também utilizando for() exiba o vetor completo e a mensagem:
//    "<qtd> produtos cadastrados."

// → Seu código aqui:

let produtos = []

let quantos = Number(console.questionInt("quantidade de produtos que deseja cadastrar? "))

for(let i = 0; i < quantos; i++){
    produto = console.question("digite o nome do produto: ")
    produtos.push(produto)
}

for(const num of produtos){
    console.log(num)
}
console.log(`quantidade de produtos cadastrados: ${produtos.length}`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Busca em vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
// b) Pergunte ao usuário o nome de um aluno.
// c) Usando for e break, verifique se o nome existe na lista.
//    - Se existir: "<nome> está matriculado(a) (índice <i>)."
//    - Se não:     "<nome> não foi encontrado(a)."

// → Seu código aqui:

let nome = String(console.question("digite o nome de um aluno: "))

for(let i = 0; i < alunos.length; i++){
    if(alunos[i] == nome){
        console.log(`${nome} esta matriculado, aluno no indice ${i}`)
        break
    } else{
        console.log(`${nome} nao foi encontrado.`)
    }
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Vetor de objetos
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const livros = [
        { titulo: "Dom Casmurro",       paginas: 256 },
        { titulo: "O Cortiço",          paginas: 304 },
        { titulo: "Memórias Póstumas",  paginas: 208 },
        { titulo: "Capitães da Areia",  paginas: 280 },
      ];
// b) Exiba a lista com console.table().
// c) Usando for, calcule:
//    - Total de páginas de todos os livros.
//    - Média de páginas por livro.
// d) Exiba o título do livro com MAIS páginas.

// → Seu código aqui:

console.table(livros)

let total_paginas = 0
let media = 0
let maior = livros[0].paginas

for(let i = 0; i < livros.length; i++){
    total_paginas += livros[i].paginas
}

media = total_paginas / livros.length

console.log(`total de paginas: ${total_paginas}`)
console.log(`media: ${media}`)

for(let i = 0; i < livros.length; i++){
    if(livros[i].paginas >= maior){
        maior = livros[i].paginas
    }
}

console.log(`livro com mais paginas: ${livros[i].titulo}(num. de paginas ${livros[i].paginas})`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Filtro com push
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];
// b) Usando for, separe o vetor acima em dois vetores:
//    - menores[]: pessoas com idade < 18
//    - adultos[]: pessoas com idade >= 18
// c) Exiba:
//    "Menores (<qtd>): <menores>"
//    "Adultos (<qtd>): <adultos>"

// → Seu código aqui:

let menores = []
let maiores = []

for(const idade of idades){
    if(idade >= 18){
        maiores.push(idade)
    } else{
        menores.push(idade)
    }
}

console.log(`maiores: ${maiores}, qntd: ${maiores.length}`)
console.log(`menores: ${menores}, qntd: ${menores.length}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio para notas;
// b) Usando do...while e switch, exiba o menu:
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
// c) Realize as funções escolhidas até o usuário escolher 0.
// d) Ao sair: "Encerrando. Total de notas registradas: <qtd>"

// → Seu código aqui:

fazer

console.log("_______________________________");
