// ============================================================
//   ATIVIDADE 09 – Estruturas de Controle (Repetição - For)
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Contagem simples
// ------------------------------------------------------------
// a) Usando um for, exiba no console os números de 5 a 12, um por linha.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Contagem concluída!"

// → Seu código aqui:

for(let i = 5; i <= 12; i++){
    console.log(`numero: ${i}`)
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem decrescente
// ------------------------------------------------------------
// a) Usando um for, exiba os números de 10 até 3 em ordem decrescente.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Lançamento! 🚀"

// → Seu código aqui:

for(let i = 10; i >= 3; i--){
    console.log(`contagem regressiva: ${i}`)
}

console.log("Lançamento! 🚀")

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Números pares
// ------------------------------------------------------------
// a) Usando um for com passo 2, exiba todos os números pares de 0 a 30.
// b) Ao final, exiba quantos números pares foram exibidos.

// → Seu código aqui:

// let pares = []
// for(let i = 0; i <= 30; i += 2){
//     console.log(`pares: ${i}`)
//     pares.push(i)
// }

// console.log(`numeros pares exibidos: ${pares.length}`);


// ------------------------------------------------------------
// EXERCÍCIO 4 – Tabuada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro (questionInt()).
// b) Exiba a tabuada desse número de 1 a 10 no formato:
//    "<número> x <i> = <resultado>"

// → Seu código aqui:

 let readline = require('readline-sync')

// let numero = readline.questionInt("digite um numero inteiro: ")

// for(let i = 1; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Soma acumulada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro positivo N (questionInt()).
// b) Usando um for, calcule a soma de todos os inteiros de 1 até N.
// c) Exiba: "A soma de 1 até <N> é <soma>"

// → Seu código aqui:

// let numero = readline.questionInt("digite um numero inteiro positivo: ")
// let soma  = 0
// for(let i = 1; i < numero; i++){
//     soma += i
// }

// console.log(`A soma de 1 até ${numero} é ${soma}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Fatorial
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro de 1 a 10 (questionInt()).
// b) Calcule o fatorial desse número usando um for.
//    Fatorial de N (N!) = 1 × 2 × 3 × ... × N
//    Exemplo: 5! = 1 × 2 × 3 × 4 × 5 = 120
// c) Exiba: "<N>! = <resultado>"

// → Seu código aqui:

// let numero = readline.questionInt("digite um de 1 a 10: ")

// let fatorial = 1

// for(let i = 1; i <= numero; i++){
//     fatorial = fatorial * i
// }

// console.log(`fatorial de ${numero} = ${fatorial}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Percorrendo um array
// ------------------------------------------------------------
// a) Utilizando o array:
    const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Fortaleza"];
// b) Utilizando de um for, exiba cada cidade com seu índice no formato:
//    "[<indice>] - <Cidade>"
// c) Ao final, exiba: "Total de cidades: <quantidade>"

// → Seu código aqui:

// for(let i = 0; i < cidades.length; i++){
//     console.log(`${i} - ${cidades[i]}`)
// }

// console.log(`total de cidades: ${cidades.length}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Maior e menor valor
// ------------------------------------------------------------
// a) Declare o array:
  const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
// b) Usando um for, encontre o maior e o menor valor do array.
// c) Exiba:
//    "Maior temperatura: <maior>°C"
//    "Menor temperatura: <menor>°C"

// → Seu código aqui:

    // let maior_temperatura = temperaturas[0]
    // let menor_temperatura = temperaturas[0]

    // for(let i = 1; i < temperaturas.length; i++){
    //     if(temperaturas[i] < menor_temperatura){
    //         menor_temperatura = temperaturas[i]
    //     }
    //     if(temperaturas[i] > maior_temperatura){
    //         maior_temperatura = temperaturas[i]
    //     }
    // }

    // console.log(`maior temperatura: ${maior_temperatura}`)
    // console.log(`menor temperatura: ${menor_temperatura}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contando com condição
// ------------------------------------------------------------
// a) Utilizando do array:
    const idades = [12, 25, 17, 34, 15, 42, 16, 29, 8, 19];
// b) Usando um for, conte:
//    - Quantas pessoas são menores de idade (< 18)
//    - Quantas são maiores de idade (>= 18)
// c) Exiba os dois totais.

// → Seu código aqui:

    // let maior_idade = []
    // let menor_idade = []

    // for(let i = 0; i < idades.length; i++){
    //     if(idades[i] > 18){
    //         maior_idade.push(idades[i])
    //     }
    //     if(idades[i] < 18){
    //         menor_idade.push(idades[i])
    //     }
    // }

    // console.log(`quantidade de maiores de idade: ${maior_idade.length}`)
    // console.log(`quantidade de menores de idade: ${menor_idade.length}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Média com array
// ------------------------------------------------------------
// a) Utilizando do array:
    const salarios = [1800, 3200, 950, 4500, 2100, 1500, 7800, 2900];
// b) Usando um for, calcule a média salarial.
// c) Exiba a média no formato: "Média salarial: R$ <media>"
// d) Usando outro for, exiba cada salário e se está acima ou abaixo da média:
//    "R$ 1800,00 – Abaixo da média"
//    "R$ 3200,00 – Acima da média"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Calcule a média das notas da turma e armazene em uma variável 'media'.
// e) Percorra o array e para cada aluno exiba no console:
//    "<nome>: <nota> – <situação>"
//    A situação deve ser:
//      "Aprovado"    → nota >= 7
//      "Recuperação" → nota >= 5 e < 7
//      "Reprovado"   → nota < 5
// f) Ao final, exiba a média da turma no formato:
//    "Média da turma: <media>"
// g) Exiba o array 'turma' com console.table().

// → Seu código aqui:

// let turma = []

// // ===== ALUNO 1 =====
// let nome1 = readline.question("Nome do aluno 1: ")
// let n1a1 = Number(readline.question("Nota 1: "))
// let n2a1 = Number(readline.question("Nota 2: "))
// let n3a1 = Number(readline.question("Nota 3: "))

// let aluno1 = {
//   nome: nome1,
//   notas: [n1a1, n2a1, n3a1]
// };

// turma.push(aluno1)

// // ===== ALUNO 2 =====
// let nome2 = readline.question("\nNome do aluno 2: ")
// let n1a2 = Number(readline.question("Nota 1: "))
// let n2a2 = Number(readline.question("Nota 2: "))
// let n3a2 = Number(readline.question("Nota 3: "))

// let aluno2 = {
//   nome: nome2,
//   notas: [n1a2, n2a2, n3a2]
// };

// turma.push(aluno2)

// // ===== ALUNO 3 =====
// let nome3 = readline.question("\nNome do aluno 3: ")
// let n1a3 = Number(readline.question("Nota 1: "))
// let n2a3 = Number(readline.question("Nota 2: "))
// let n3a3 = Number(readline.question("Nota 3: "))

// let aluno3 = {
//   nome: nome3,
//   notas: [n1a3, n2a3, n3a3]
// };

// turma.push(aluno3)

// let somaTotal = n1a1+n2a1+n3a1+ n1a2+n2a2+n3a2 + n1a3+n2a3+n3a3
// let media = somaTotal / 9

// let m1 = (n1a1 + n2a1 + n3a1) / 3
// let m2 = (n1a2 + n2a2 + n3a2) / 3
// let m3 = (n1a3 + n2a3 + n3a3) / 3

// let s1 = ""
// if (m1 >= 7) {
//   s1 = "Aprovado"
// } else if (m1 >= 5) {
//   s1 = "Recuperação"
// } else {
//   s1 = "Reprovado"
// }

// let s2 = "";
// if (m2 >= 7) {
//   s2 = "Aprovado"
// } else if (m2 >= 5) {
//   s2 = "Recuperação"
// } else {
//   s2 = "Reprovado"
// }

// let s3 = "";
// if (m3 >= 7) {
//   s3 = "Aprovado"
// } else if (m3 >= 5) {
//   s3 = "Recuperação"
// } else {
//   s3 = "Reprovado"
// }

// console.log(`\n${nome1}: ${m1.toFixed(2)} – ${s1}`)
// console.log(`${nome2}: ${m2.toFixed(2)} – ${s2}`)
// console.log(`${nome3}: ${m3.toFixed(2)} – ${s3}`)

// console.log(`\nMédia da turma: ${media.toFixed(2)}`)

// console.table(turma);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Coletando dados com for e input
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos produtos quer cadastrar (questionInt()).
// b) Usando um for, colete de cada produto:
//    - nome (question())
//    - preco (questionFloat())
// c) Armazene cada produto como objeto em um array 'estoque'.
// d) Após o cadastro, percorra o array e exiba cada produto no formato:
//    "<nome>: R$ <preco>"
// e) Exiba o produto mais caro e o mais barato.
// f) Exiba o array com console.table().

// → Seu código aqui:

// let estoque = []

// let quantidade = readline.questionInt("Quantos produtos deseja cadastrar? ")

// let produtoMaisCaro = ""
// let precoMaisCaro = 0

// let produtoMaisBarato = ""
// let precoMaisBarato = 0

// for (let i = 0; i < quantidade; i++) {
//   console.log(`\nProduto ${i + 1}`)

//   let produto = readline.question("Nome: ")
//   let preco = readline.questionFloat("Preco: ")

//   let item = {
//     nome: produto,
//     preco: preco
//   };

//   estoque.push(item)

//   if (i === 0) {
//     produtoMaisCaro = produto
//     precoMaisCaro = preco

//     produtoMaisBarato = produto
//     precoMaisBarato = preco
//   } else {
//     if (preco > precoMaisCaro) {
//       produtoMaisCaro = produto
//       precoMaisCaro = preco
//     }

//     if (preco < precoMaisBarato) {
//       produtoMaisBarato = produto
//       precoMaisBarato = preco
//     }
//   }
// }

// console.log("\nLista de produtos:")

// for (let i = 0; i < estoque.length; i++) {
//   console.log(`${estoque[i].nome}: R$ ${estoque[i].preco.toFixed(2)}`)
// }

// console.log(`\nMais caro: ${produtoMaisCaro} - R$ ${precoMaisCaro.toFixed(2)}`)
// console.log(`Mais barato: ${produtoMaisBarato} - R$ ${precoMaisBarato.toFixed(2)}`)

// console.table(estoque)

console.log("_______________________________");