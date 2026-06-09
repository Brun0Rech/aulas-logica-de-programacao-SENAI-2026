// ============================================================
// ATIVIDADE 15 – Funções com Parâmetros e Retornos
// ============================================================
//
// IMPORTANTE: a partir de agora, as funções devem RECEBER
// PARÂMETROS e RETORNAR valores sempre que fizer sentido.
// Evite ficar misturando console.log() dentro de funções.
//
// ============================================================

let readline = require('readline-sync')


// ------------------------------------------------------------
// EXERCÍCIO 1 – Função com 1 parâmetro
// ------------------------------------------------------------
// a) Crie a função 'quadrado(n)' que retorna n elevado ao quadrado.
// b) Teste com 3, 7 e 10. Exiba cada resultado.

// → Seu código aqui:

    // let numeros = [3,7,10]

    // function quadrado(n) {
    //     return n ** 2
    // }

    // for(let i = 0; i < numeros.length; i++){
    //     console.log(`${numeros[i]} ao quadrado = ${quadrado(numeros[i])}`)
    // }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função com 2 parâmetros
// ------------------------------------------------------------
// a) Crie a função 'somar(a, b)' que retorna a soma de 2 numeros quaisquer (numeros passados ao chamar a função).
// b) Crie 'subtrair(a, b)', 'multiplicar(a, b)' e 'dividir(a, b)'.
//    Em dividir, retorne a string "Erro: divisão por zero" se b === 0.
// c) Teste cada uma com diversos valores e exiba os resultados.

// → Seu código aqui:

    // let n= [0,5,9,6]

    // function somar(a,b){
    //     return a + b
    // }

    // function subtrair(a,b){
    //     return a - b
    // }

    // function multiplicar(a,b){
    //     return a * b
    // }

    // function dividir(a,b){
    //     return a / b
    // }

    // for(let i = 0; i < n.length-2; i++){
    //     for(let j = 2; j < n.length; j++){
    //         console.log(`soma = ${somar(n[i],n[j])}`)
    //     }
    // }

    // for(let i = 0; i < n.length-2; i++){
    //     for(let j = 2; j < n.length; j++){
    //         console.log(`subtrair = ${subtrair(n[i],n[j])}`)
    //     }
    // }

    // for(let i = 0; i < n.length-2; i++){
    //     for(let j = 2; j < n.length; j++){
    //         console.log(`multiplicar = ${multiplicar(n[i],n[j])}`)
    //     }
    // }

    // for(let i = 0; i < n.length-2; i++){
    //     for(let j = 2; j < n.length; j++){
    //         console.log(`divisao = ${dividir(n[i],n[j]).toFixed(2)}`)
    // }
    // }
        


// ------------------------------------------------------------
// EXERCÍCIO 3 – Funções booleanas
// ------------------------------------------------------------
// a) Crie 'ehPar(n)' que retorna true se n for par, senão false.
// b) Crie 'ehMaiorDeIdade(idade)' que retorna true se idade >= 18.
// c) Crie 'ehVogal(letra)' que retorna true se letra for vogal
//    (considere maiúsculas e minúsculas).
// d) Teste cada função e exiba os resultados.

// → Seu código aqui:

    let letras = ["a","e","i","o","u"]

    function par(n){
        return !(n % 2 === 0)
    }

    function maior_de_idade(idade){
        return idade >= 18
    }

    function vogal(letra){
        return letras.includes(letra.toLowerCase())
    }

    console.log(par(7))
    console.log(maior_de_idade(21))
    console.log(vogal("o"))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Múltiplos returns (early return)
// ------------------------------------------------------------
// a) Crie a função 'classificarIMC(imc)' que retorna:
//    - "Abaixo do peso"   se imc < 18.5
//    - "Peso normal"      se imc < 25
//    - "Sobrepeso"        se imc < 30
//    - "Obesidade"        caso contrário
// b) Crie 'calcularIMC(peso, altura)' que retorna peso / (altura * altura).
// c) Pergunte peso e altura ao usuário.
// d) Combine as duas funções e exiba:
//    "IMC: <valor> – <classificação>"

// → Seu código aqui:

let altura = Number(readline.question("digite sua altura: "))
let peso = Number(readline.question("digite seu peso: "))

function calcularIMC(altura,peso){
    let imc = peso / (altura ** 2)
    return imc
}

function classificarIMC(imc){
    if(imc <18.5){
        return "abaixo do peso"
    }else if(imc < 25){
        return "peso normal"
    }else if(imc < 30){
        return "sobrepeso"
    }else{
        return "obesidade"
    }
}

console.log(`IMC: ${calcularIMC(altura,peso)}, classificacao: ${classificarIMC(calcularIMC(altura,peso))}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Parâmetros padrão (default)
// ------------------------------------------------------------
// a) Crie a função 'precoComDesconto(valor, desconto = 10)' que retorna
//    o valor após aplicar o desconto em PORCENTAGEM.
// b) Teste:
//    - precoComDesconto(100)     → retorno esperado: 90
//    - precoComDesconto(100, 25  → retorno esperado: 75
//    - precoComDesconto(250, 5)  → retorno esperado: 237.5
// c) Exiba cada resultado formatado com toFixed(2).

// → Seu código aqui:

function preco_desconto(){
    
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções que recebem vetores
// ------------------------------------------------------------
// a) Crie a função 'somarVetor(vet)' que retorna a soma dos elementos de um vetor.
// b) Crie 'mediaVetor(vet)' que retorna a média (REAPROVEITE somarVetor).
// c) Crie 'maiorDoVetor(vet)' que retorna o maior valor de um vetor.
// d) Crie 'menorDoVetor(vet)' que retorna o menor valor de um vetor.
// e) Teste com:
      numeros = [12, 7, 25, 3, 18, 9, 31, 14];

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Função que retorna objeto
// ------------------------------------------------------------
// a) Crie a função 'criarAluno(nome, idade, nota)' que retorna um objeto:
//    { nome, idade, nota, situacao }
//    onde 'situacao' é "Aprovado" se nota >= 7, senão "Reprovado".
// b) A verificação de aprovação deve ser feita por uma função específica para isso.
// c) Crie 3 alunos chamando a função e exiba-os com console.table([a1, a2, a3]).

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Função que retorna vetor
// ------------------------------------------------------------
// a) Crie a função 'gerarPares(inicio, fim)' que retorna um vetor
//    com todos os números PARES entre 'inicio' e 'fim' (inclusive).
// b) Teste com gerarPares(1, 20) e exiba o vetor.
// c) Crie 'filtrarMaioresQue(vet, limite)' que retorna um novo vetor
//    apenas com os elementos maiores que 'limite'.
// d) Combine: gere pares de 1 a 50 e filtre os maiores que 30.

// → Seu código aqui:


console.log("_______________________________");