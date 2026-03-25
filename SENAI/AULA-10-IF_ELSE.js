// ============================================================
//   ATIVIDADE 07 – Estruturas de Controle (If / Else)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-07.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync')


// ------------------------------------------------------------
// EXERCÍCIO 1 – If simples
// ------------------------------------------------------------
// a) Declare "pontos" com valor 120.
// b) Se "pontos" for maior que 100, exiba: "Nível alcançado!".
//    Mas se "pontos" for maior que 200, exiba somente: "Nível máximo alcançado!"

// → Seu código aqui:

// let pontos = 120

// if(pontos > 200){
//     console.log("Nível máximo alcançado!")
// } else if(pontos > 100){
//     console.log("Nível alcançado!")
// }



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – If / Else
// ------------------------------------------------------------
// a) Declare "hora" com o valor 14 (representando 14h).
// b) Se hora for menor que 12, exiba: "Bom dia!".
// c) Se hora for menor que 18, exiba: "Boa tarde!".
// d) Senão, exiba: "Boa noite!"

// → Seu código aqui:

// let hora = 14

// if(hora < 12){
//     console.log("Bom dia!")
// } else if(hora < 18){
//     console.log("Boa tarde!")
// } else{
//     console.log("Boa noite!")
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário sua idade usando questionInt().
// b) Se a idade for maior ou igual a 18, exiba: "Adulto".
//    Se a idade for menor que 12, exiba: "Criança".
//    Senão, exiba: "Jovem".

// → Seu código aqui:

    // let idade = lerTeclado.questionInt("digite sua idade: ")

    // if(idade >= 18){
    //         console.log("Adulto")
    //     } else if(hora < 12){
    //         console.log("crianca")
    //     } else{
    //         console.log("jovem")
    //     }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – If / Else If / Else
// ------------------------------------------------------------
// a) Declare "notaAluno" com valor 6.8.
// b) Em uma variável "status", usando if/else if/else, armazene:
//    - nota >= 9     → "Aprovado com mérito"
//    - nota >= 7     → "Aprovado"
//    - nota >= 5     → "Recuperação"
//    - abaixo de 5   → "Reprovado"
// c) AO final, exiba a nota e a situação com template literal.

// → Seu código aqui:

    // let aluno_nota = 6.8

    // if(aluno_nota >= 9){
    //     status = "APROVADO COM MERITO"
    // } else if(aluno_nota >= 7){
    //     status = "APROVADO"
    // } else if(aluno_nota >= 5){
    //     status = "RECUPERACAO"
    // } else {
    //     status = "REPROVADO"
    // }
        
    // console.log(`Nota do aluno: ${aluno_nota}, situacao: ${status}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – If / Else If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário a temperatura atual (questionFloat()).
// b) Classifique e exiba usando if/else if/else:
//    - temperatura < 10           → "Muito frio"
//    - temperatura >= 10 e < 18   → "Frio"
//    - temperatura >= 18 e <= 25  → "Agradável"
//    - temperatura > 25 e <= 35   → "Quente"
//    - temperatura > 35           → "Muito quente"

// → Seu código aqui:

    // let temp = lerTeclado.questionFloat("Que temperatura esta fazendo? ")

    // if(temp > 35){
    //         status = "Muito quente"
    //     } else if(temp > 25){
    //         status = "Quente"
    //     } else if(temp > 18 ){
    //         status = ("Agradável")
    //     } else if(temp > 10 ){
    //         status = ("Frio")
    //     } else {
    //         status = ("Muito frio")
    //     }

    //     console.log(`Hoje esta: ${status}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – If aninhado
// ------------------------------------------------------------
// a) Pergunte ao usuário e armazene as informações em um objeto:
//    - Nome (question()).
//    - Se possui ingresso (keyInYN()).
//    - Sua idade (questionInt()).
// b) Se NÃO possui ingresso → exiba: "<Nome>, dirija-se à bilheteria."
//    Se possui ingresso:
//      - idade < 18  → "Meia-entrada: menor de idade."
//      - idade >= 60 → "Meia-entrada: melhor idade."
//      - caso contrário → "Entrada inteira."

// → Seu código aqui:

    // let nome = lerTeclado.question("digite seu nome: ")
    // let ing = lerTeclado.keyInYN("possui ingresso? ")
    // let idade = lerTeclado.questionInt("digite sua idade: ")

    // let pessoa = {
    //     nome: nome,
    //     ingresso: ing,
    //     idade: idade
    // }

    // if(ing === true){
    //   if(idade >= 60)  {
    //   console.log("Meia Entrada: melhor de idade")
    // } else if(idade < 18){
    //     console.log("Meia Entrada: menor de idade")
    // } else {
    //     console.log("entrada inteira!")
    // }
    // } else {
    //     console.log(`${pessoa.nome}, dirija-se a bilheteria`)
    // }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – If com operadores lógicos (&&)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome (question()).
//    - Idade (questionInt()).
//    - Se possui habilitação (keyInYN()).
// b) Armazene os dados em um objeto chamado "motorista".
// c) Para alugar um carro, o motorista precisa ter 21 anos ou mais E possuir habilitação.
//    - Se pode alugar → exiba: "<nome>, você pode alugar o veículo."
//    - Senão          → exiba: "<nome>, você não atende aos requisitos."

// → Seu código aqui:

    // let nome = lerTeclado.question("digite seu nome: ")
    // let cnh = lerTeclado.keyInYN("possui cnh? ")
    // let idade = lerTeclado.questionInt("digite sua idade: ")

    // let motorista = {
    //         nome: nome,
    //         habilitacao: cnh,
    //         idade: idade
    //     }

    // if(motorista.idade >= 21 && motorista.cnh === true){
    //     console.log("Alugacao do carro permitida")
    // } else{
    //     console.log(`${motorista.nome},voce nao atende aos requisitos`)
    // }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – If com operadores lógicos (||)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se é estudante.
//    - Se é idoso, com 60 anos ou mais.
// b) Se é estudante OU idoso → exiba: "Desconto de 50% aplicado!"
//    Senão → exiba: "Sem desconto. Preço cheio."

// → Seu código aqui:

    // let estudante = lerTeclado.keyInYN("voce e estudante? ")
    // let idoso = lerTeclado.keyInYN("voce tem 60 anos ou mais? ")

    // if(idoso === true || estudante === true){
    //     console.log("Desconto de 50% aplicado!")
    // } else {
    //     console.log("Sem desconto. Preço cheio.")
    // }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Sistema de notas completo
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do aluno.
//    - Nota da prova 1.
//    - Nota da prova 2.
// b) Armazene os dados em um objeto "aluno" e calcule a média
//    (média = (prova1 + prova2) / 2). Adicione a média ao objeto.
// c) Classifique e exiba com if/else if/else:
//    - média >= 7  → "Aprovado"
//    - média >= 5  → "Em recuperação"
//    - abaixo de 5 → "Reprovado"
// d) Exiba o objeto "aluno" com console.table().
// e) Exiba uma mensagem final: "<nome>: <situação> (média: <média>)"

// → Seu código aqui:

    // let nome = lerTeclado.question("digite seu nome: ")
    // let nota1 = lerTeclado.questionInt("digite a nota da sua primeira prova: ")
    // let nota2 = lerTeclado.questionInt("digite a nota da sua segunda prova: ")

    // let aluno = {
    //     nome: nome,
    //     nota1: nota1,
    //     nota2: nota2
    // }

    // let media = (nota1 + nota2) / 2

    // aluno.media = media

    //     if(aluno.media >= 7){
    //             status = "Aprovado"
    //         } else if(aluno.media >= 5){
    //             status = "Em recuperação"
    //         } else {
    //             status = "reprovado"
    //         }

    // console.table(aluno)

    // console.log(`${aluno.nome}, situacao: ${status} e media final: ${aluno.media}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Calculadora interativa
// ------------------------------------------------------------
// a) Peça ao usuário dois números usando questionFloat().
// b) Peça ao usuário que escolha uma operação digitando um número:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão
//    Use questionInt() para capturar a escolha.
// c) Armazene os dois números, o número referente à escolha e o símbolo referente à escolha
//    em um objeto 'calculo' com as propriedades:
//    numeroA, numeroB, operacao, simbolo.
// d) Com base na escolha, calcule o resultado usando if/else if, else.
//    Dica: se a operação for divisão e o segundo número for 0, exiba um aviso de erro.
// e) Exiba no console o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Exemplo: "10 + 3 = 13"
// f) Realize testes para verificar se a calculadora está funcionando corretamente.
// g) Chame o professor para realizar alguns testes 🫡

// → Seu código aqui:

    // let number1 = lerTeclado.questionFloat("digite um numero qualquer: ")
    // let number2 = lerTeclado.questionFloat("digite um numero qualquer: ")
    // let operacao = lerTeclado.questionInt(`digite um numero para escolher uma operacao:
    // 1  Soma | 2  Subtracao | 3  Multiplicacao | 4  Divisao | `)

    // if(operacao === 1){
    //     soma = number1 + number2
    //     console.log(soma)
    // } else if(operacao === 2){
    //     subtracao = number1 - number2
    //     console.log(subtracao)
    // } else if(operacao === 3){
    //     multiplicacao = number1 * number2
    //     console.log(multiplicacao)
    // } else if(operacao === 4){
    //     if (number2 != 0){
    //         divisao = number1 / number2
    //         console.log(divisao)
    //     } else{
    //         console.log("opercao invalida (divisao por 0)")
    //     }
    // } else{
    //     console.log("valor ddgitado invalido!")

    // }
console.log("_______________________________");