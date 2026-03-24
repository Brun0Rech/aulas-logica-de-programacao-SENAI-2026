// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

    // → Seu código aqui:

    // let relaçao01 = 10 == 10
    // console.log(relaçao01)

    // let relacao02 = 10 === 10
    // console.log(relacao02)

    // let relaçao03 = 10 == "10"
    // console.log(relaçao03)

    // let relacao04 = 10 === "10"
    // console.log(relacao04)

    // let relaçao05 = 0 == false
    // console.log(relaçao05)

    // let relacao06 = 0 === false
    // console.log(relacao06)

    // let relaçao07 = null == undefined
    // console.log(relaçao07)

    // let relacao08 = null === undefined
    // console.log(relacao08)

    // let relaçao09 = "JS" =="JS"
    // console.log(relaçao07)

    // let relacao10 = "JS" == "JS"
    // console.log(relacao08)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:


    // let comparacao01 = 5 != 5
    // console.log(comparacao01)

    // let comparacao02 = 5 !== 5
    // console.log(comparacao02)

    // let comparacao03 = 5 == "5"
    // console.log(comparacao03)

    // let comparacao04 = 5 !== "5"
    // console.log(comparacao04)

    // let comparacao05 = 7 == 3
    // console.log(comparacao05)

    // let comparacao06 = 7 !== 3
    // console.log(comparacao06)

    // let comparacao07 = true == 1
    // console.log(comparacao07)

    // let comparacao08 = true !== 1
    // console.log(comparacao08)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

    // let salarioA = 3500
    // let salarioB = 4200

    // let comparacao01 = salarioA > salarioB
        
    // let comparacao02 = salarioA < salarioB
            
    // let comparacao03 = salarioA >= salarioB
    
    // let comparacao04 = salarioA <= salarioB

    // let comparacao05 = salarioA === salarioB
   
   //console.log(`Salário A (R$ 3500) > Salário B (R$  4200): ${comparacao01}`)


   
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

    // let estoque = 0
    // estoque++

    // let tem_estoque = estoque > 0

    // let estoque_zerado = estoque === 0

    // let temperatura = 36.5
    // temperatura++

    // let febre = temperatura > 36.5

    // console.log(`valor estoque: ${estoque}`)
    // console.log(`tem estoque?${tem_estoque ? 'sim' : 'nao'}`)
    // console.log(`estoque esta zerado?${estoque_zerado ? 'sim' : 'nao'}`)
    // console.log(`hoje esta fazendo ${temperatura} °C`)
    // console.log(`lucas esta com febre? ${febre ? 'sim' : 'nao'}`)
    // console.log("KKKKKKKKKKKKKKKKK se ferrou")

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

    // let num1 = lerTeclado.questionFloat("digite qualquer numero:")
    // let num2 = lerTeclado.questionFloat("digite mais um numero:")

    // let comparacao01 = num1 > num2
            
    // let comparacao02 = num1 < num2
                
    // let comparacao03 = num1 === num2
        
    // let comparacao04 = num1 >= num2

    // console.log(`num1 > num2: ${comparacao01}`)
    // console.log(`num1 < num2: ${comparacao02}`)
    // console.log(`num1 === num2: ${comparacao03}`)
    // console.log(`num1 >= num2: ${comparacao04}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:

    // let preco_produto = lerTeclado.questionFloat(`precifique o leite: `)

    // const preco_maximo = 100

    // let orcamento_valido = preco_produto < preco_maximo

    // let leite_caro = preco_produto > preco_maximo

    // console.log(`
    //     preco informado: ${preco_produto}
    //     Dentro do orçamento de R$ ${preco_maximo}?  ${orcamento_valido ? "Sim" : "Não"}"
    //     Leite esta caro R$ ${preco_maximo}? ${leite_caro ? "Sim" : "Não"}"

    // `)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:

    // let pessoa01 = lerTeclado.question("digite um nome: ")
    // let idadePessoa1 = lerTeclado.questionFloat(`digite a idade de ${pessoa01}: `)

    // let pessoa02 = lerTeclado.question("digite um nome: ")
    // let idadePessoa2 = lerTeclado.questionFloat(`digite a idade de ${pessoa02}: `)

    // let comparacao01 = idadePessoa1 > idadePessoa2
            
    // let comparacao02 = idadePessoa1 === idadePessoa2
                
    // let comparacao03 =  idadePessoa1 >= 18
        
    // let comparacao04 = idadePessoa2 >= 18

    // console.log(`Idade de ${pessoa01} é ${idadePessoa1}. Maior de 18 anos?:${comparacao03 ? "sim" : "nao"}`)
    // console.log(`Idade de ${pessoa02} é ${idadePessoa2}. Maior de 18 anos?:${comparacao04 ? "sim" : "nao"}`)


    // console.log(`${pessoa01} é mais velho(a) que ${pessoa02}? ${comparacao01 ? "sim" : "nao"}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:

    // let aluno01 = lerTeclado.question("digite o nome do aluno: ")
    // let n1_aluno01 = lerTeclado.question(`digite a nota 01 do ${aluno01}: `)
    // let n2_aluno01 = lerTeclado.question(`digite a nota 02 do ${aluno01}: `)
    // let n3_aluno01 = lerTeclado.question(`digite a nota 03 do ${aluno01}: `)

    // let aluno02 = lerTeclado.question("digite o nome do aluno: ")
    // let n1_aluno02 = lerTeclado.question(`digite a nota 01 do ${aluno02}: `)
    // let n2_aluno02 = lerTeclado.question(`digite a nota 02 do ${aluno02}: `)
    // let n3_aluno02 = lerTeclado.question(`digite a nota 03 do ${aluno02}: `)

    // let notas_aluno01 = [n1_aluno01, n2_aluno01, n3_aluno01]

    // let notas_aluno02 = [n1_aluno02, n2_aluno02, n3_aluno02]

    // let media_aluno01 = notas_aluno01.reduce((total, notas) => total + notas, 0) / notas_aluno01.length

    // let media_aluno02 = notas_aluno02.reduce((total, notas) => total + notas, 0) / notas_aluno01.length

    // let maior_nota_aluno01 = Math.max(notas_aluno01[0],notas_aluno01[1],notas_aluno01[2])

    // let maior_nota_aluno02 = Math.max(notas_aluno02[0],notas_aluno02[1],notas_aluno02[2])

    // let alunos = [
    //     aluno1= {
    //     nome: aluno01,
    //     nota1: n1_aluno01,
    //     nota2: n2_aluno01,
    //     nota3: n3_aluno01,
    //     media: media_aluno01
    //     },
    //     aluno2= {
    //         nome: aluno02,
    //         nota1: n1_aluno02,
    //         nota2: n2_aluno02,
    //         nota3: n3_aluno02,
    //         media: media_aluno02
    //     }
    // ]

    // console.log(`Quem teve a maior media?${media_aluno01 > media_aluno02 ? `${aluno01}` : `${aluno02}`}`)

    // console.log(`Quem teve a maior nota?${maior_nota_aluno01 > maior_nota_aluno02 ? `${aluno01}` : `${aluno02}`}`)

console.log("_______________________________");