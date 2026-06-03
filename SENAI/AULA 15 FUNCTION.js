// ============================================================
// ATIVIDADE 14 – Funções Simples
// ============================================================
//
// IMPORTANTE: nesta atividade, NÃO use parâmetros nem return.
// As funções devem apenas executar um bloco de código.
//
// ============================================================

let readline = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Primeira função
// ------------------------------------------------------------
// a) Crie uma função 'saudacao' que exibe 3 linhas no console:
//    "Olá!"
//    "Bem-vindo(a) ao curso de JavaScript."
//    "Bons estudos!"
// b) Chame a função 2 vezes.

// → Seu código aqui:

// function saudacao(){
//     console.log("Olá!")
//     console.log("Bem-vindo(a) ao curso de JavaScript.")
//     console.log("Bons estudos!")
// }

// saudacao()
// saudacao()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função que organiza
// ------------------------------------------------------------
// a) Crie uma função 'linha' que exibe:
//    "----------------------------------------"
// b) Crie uma função 'titulo' que exibe:
//    "         RELATÓRIO MENSAL              "
// c) Crie uma função 'cabecalho' que CHAMA, em ordem:
//    linha(), titulo(), linha().
// d) Chame cabecalho() uma vez.

// → Seu código aqui:

    // function linha(){
    //     console.log("         RELATÓRIO MENSAL              ")
    // }

    // function titulo(){
    //  console.log("----------------------------------------")
    // }

    // function cabecalho(){
    //  linha()
    //  titulo()
    //  linha()
    // }

    // titulo()


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculadora de informações
// ------------------------------------------------------------
// a) Crie uma função 'meusDados' que pergunta ao usuário:
//    - Nome
//    - Idade
//    - Cidade
// b) Crie uma função 'exibirDados' que recebe exibe os dados e exibe um cartão no formato:
//    -------------------------
//    Nome:   <nome>
//    Idade:  <idade>
//    Cidade: <cidade>
//    -------------------------
// c) Pergunte os dados de 2 usuários e os guarde em um objeto.
// d) Exiba os dados dos 2 usuários.
//
// ATENÇÃO: APÓS CRIADA, DIGITAR/CHAMAR A FUNÇÃO APENAS UMA VEZ
// PENSE EM UMA LÓGICA QUE EVITE DIGITAR A FUNÇÃO MAIS DE UMA VEZ
// Após finalizar, me chame para eu verificar a lógica - questão importante

// → Seu código aqui:

// let usuarios = []

// for(let i = 0; i < 2; i++){

//     console.log(`usuario ${i+1}`)
//     console.log("     ")

//     function meus_dados(){

//         usuarios.push(
//             {
//             nome: readline.question("seu nome: "),
//             idade: readline.question("sua idade: "),
//             cidade: readline.question("sua cidade: ")
//             }     
//         )
//     }

//     meus_dados()

//     function exibir_dados(){
//         console.log("       ")
//         console.log(`nome: ${usuarios[i].nome}`)
//         console.log(`idade: ${usuarios[i].idade}`)
//         console.log(`: ${usuarios[i].cidade}`)
//     }

//     exibir_dados()

//     }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Sorteio de número
// ------------------------------------------------------------
// a) Crie uma função 'sortear' que:
//    - Gera um número aleatório de 1 a 100
//      (Math.floor(Math.random() * 100) + 1).
//    - Exibe: "Número sorteado: <n>"
// b) Execute a função 5 vezes - tente fazer sem digitar a função 5 vezes.

// → Seu código aqui:

    // function sortear(){
    //     let num = (Math.floor(Math.random() * 100) + 1)
    //     console.log(`numero sorteado: ${num}`)
    // }

    // for(let i = 0; i < 5; i++){
    //     sortear()
    // }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Tabela de multiplicação
// ------------------------------------------------------------
// a) Crie uma função 'tabuadaDoCinco' que exibe a tabuada do 5 inteira:
// (pense em uma lógica para não precisar digitar todos os valores)
//    5 x 1 = 5
//    5 x 2 = 10
//    ...
//    5 x 10 = 50
// b) Crie uma função 'tabuadaDoSete' análoga, para o 7.
// c) Chame as duas funções.

// → Seu código aqui:

    // function tabuada5(){
    //     console.log("tabuada do 5")
    //     console.log("   ")
    //     for(let i = 1; i < 11; i++){
    //         let resultado = 5 * i
    //         console.log(`5 x ${i} = ${resultado}`)
    //     }
    //     console.log("   ")
    // }

    // function tabuada7(){
    //     console.log("tabuada do 7")
    //     console.log("   ")
    //     for(let i = 1; i < 11; i++){
    //         let resultado = 7 * i
    //         console.log(`7 x ${i} = ${resultado}`)
    //     }
    // }

    // tabuada5()
    // tabuada7()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Conversão fixa
// ------------------------------------------------------------
// a) Crie uma função 'converterTemperatura' que:
//    - Pergunta uma temperatura em Celsius.
//    - Calcula em Fahrenheit: F = C * 1.8 + 32.
//    - Exibe: "<C>°C equivalem a <F>°F".
// b) Chame a função 3 vezes.

// → Seu código aqui:

    // function converter_temp(){
    //     let temp= Number(readline.question("temperatura atual em Celsius: "))
    //     let temp_fahrenheit = Math.floor(temp * 1.8 + 32)
    //     console.log(`temperatura em fahrenheit: ${temp_fahrenheit}`)
    // }

    // converter_temp()

    // console.log(" ")

    // converter_temp()

    // console.log(" ")

    // converter_temp()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Listando informações
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const filmes = ["Matrix", "Interestelar", "Origem", "Senhor dos Anéis"];
// b) Crie a função 'listarFilmes' que percorre o vetor 'filmes' com for
//    e exibe cada um no formato: "<i+1> - <filme>".
// c) Chame listarFilmes() duas vezes.

// → Seu código aqui:

    function listar_filmes(){
        for(let i = 0; i < filmes.length; i++){
            console.log(`${filmes[i]} - ${i+1}`)
        }
    }

    listar_filmes()

    console.log(" ")

    listar_filmes()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Dividindo um programa em partes
// ------------------------------------------------------------
// Vamos criar um "mini sistema de boas-vindas" composto por 4 funções:
//
// a) 'limparTela'      → exibe 30 linhas em branco (console.log("")).
// b) 'banner'          → exibe um banner com 3 linhas (exiba qualquer informação dentro de "-----------").
// c) 'pedirNome'       → pergunta o nome do usuário e exibe "Olá, <nome>!".
// d) 'rodape'          → exibe "Sistema desenvolvido por <seu nome>".
//
// Em seguida, monte o programa principal (outra função) chamando, em ordem:
//    limparTela(); banner(); pedirNome(); rodape();
// E chame a função principal.

// → Seu código aqui:

    // function clear(){
    //     for(let i = 1; i < 31; i++){
    //         console.log(" ")
    //     }
    // }

    // function banner(){
    //     console.log("------------------")
    //     console.log(" agora o hexa vem")
    //     console.log("-----------------")
    // }

    // function nome(){
    //     let nome = readline.question("seu nome: ")
    //     console.log(`\n ola, ${nome}`)
    // }

    // function rodape(){
    //     console.log(`\n sistema desenvolvido por Bruno Rech`)
    // }

    // function sistema(){

    //     clear()
    //     banner()
    //     nome()
    //     rodape()
    // }

    // sistema()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Menu organizado em funções
// ------------------------------------------------------------
// Você vai criar um menu onde CADA opção é uma função separada.
//
// a) Crie as funções:
//    - 'opcaoSomar'       → pede 2 números e exibe a soma.
//    - 'opcaoSubtrair'    → pede 2 números e exibe a subtração.
//    - 'opcaoMultiplicar' → pede 2 números e exibe a multiplicação.
//    - 'opcaoDividir'     → pede 2 números, trata divisão por zero e exibe o resultado.
//    - 'exibirMenu'       → exibe as opções no console.
//
// b) Usando do...while + switch, monte o menu chamando a função
//    correspondente em cada case. Encerre quando o usuário digitar 0.

// → Seu código aqui:

let encerrar = 1

function menu(){
    console.log(`
        ------ calculadora basica ------

        escolha uma operacao:
        
        1- somar
        2- subtrair
        3- multiplicar
        4- dividir                    `)
}

function somar(){
    let num_soma1 = Number(readline.question("digite um numero: "))
    let num_soma2 = Number(readline.question("digite outro numero que deseja somar: "))
    let resultado = num_soma1 + num_soma2
    console.log(`resultado: ${resultado}`)
}

function subtrair(){
    let num_subtracao1 = Number(readline.question("digite um numero: "))
    let num_subtracao2 = Number(readline.question("digite outro numero que deseja subtrair: "))
    let resultado = num_subtracao1 - num_subtracao2
    console.log(`resultado: ${resultado}`)
}

function multiplicação(){
    let num_multiplicacao1 = Number(readline.question("digite um numero: "))
    let num_multiplicacao2 = Number(readline.question("digite outro numero que deseja multiplicar: "))
    let resultado = num_multiplicacao1 * num_multiplicacao2
    console.log(`resultado: ${resultado}`)
}

function dividir(){
    let num_divisao1 = Number(readline.question("digite um numero: "))
    let num_divisao2 = Number(readline.question("digite outro numero que deseja dividir: "))
    let dividir = num_divisao1 / num_divisao2
    console.log(`resultado: ${dividir}`)
}

do {
    menu()

    let operacao = Number(readline.question("\nDigite a operacao: "))

    switch (operacao) {
        case 1:
            somar()
            break

        case 2:
            subtrair()
            break

        case 3:
            multiplicação()
            break

        case 4:
            dividir()
            break

        default:
            console.log("Opcao invalida!")
            continue
    }

    encerrar = Number(readline.question("\n 0 - encerrar| 1 - continuar: ")

    )

} while (encerrar !== 0)

console.log("_______________________________");