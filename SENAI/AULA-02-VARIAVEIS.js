//let Idade = 18           // variavel
//const PI = 3.14159       // constante

//let moller_pcd = "+1000 aura"
//let sigmaboy = `farmo todo dia ${moller_pcd}`
//let number = 100

//console.log(sigmaboy)
//console.log(typeof sigmaboy)
//console.log(typeof number)

//boolean (verdadeiro ou falso)

//let pedrogay = true
//let mateushetero = false

// ============================================================
//   ATIVIDADE 01 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Declaração de variáveis
// ------------------------------------------------------------
// a) Declare uma variável com "var" chamada "meuNome" e atribua o seu nome.
// b) Declare uma variável com "var" chamada "naoUsarVar" e no valor, atribua a explicação de porque não é recomendado utilizar 'var'.
// c) Declare uma variável com "let" chamada "minhaIdade" e atribua a sua idade.
// d) Declare uma variável com "const" chamada "ANO_NASCIMENTO" e atribua o ano em que você nasceu.
// e) Exiba as quatro variáveis no console.

// → Seu código aqui:

var MEUNOME = "Bruno"
var NAOUSARVAR = " Hoje quase não se usa mais var porque surgiram formas melhores no JavaScript moderno: let e const."
let MINHAIDADE = "16"
const DATA_NASCIMENTO = "09/12/2009"
console.log(`meu nome é:${MEUNOME}\nporquê não usar var?${NAOUSARVAR}\nminha idade é:${MINHAIDADE} anos\na data do meu nascimento é:${DATA_NASCIMENTO}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Strings e template literals
// ------------------------------------------------------------
// a) Declare uma variável "cidade" com o nome da cidade onde você mora.
// b) Declare uma variável "pais" com o nome do seu país.
// c) Usando um template literal, crie a frase:
//    "Eu moro em <cidade>, no <pais>." e armazene em "fraseMoradia".
// d) Exiba "fraseMoradia" e seu tipo (typeof) no console.

// → Seu código aqui:

/* const cidade = "jaraguá do sul"
const país = "Brasil"
let frasemoradia = `Eu moro em ${cidade}, no ${país}.`
console.log(frasemoradia) 
console.log(typeof frasemoradia) */


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Boolean
// ------------------------------------------------------------
// a) Declare "maiorDeIdade" como true se você tem 18 anos ou mais, false caso contrário.
// b) Declare "temCNH" com um valor booleano que represente se você tem carteira de motorista.
// c) Exiba as duas variáveis e seus tipos (typeof).

// → Seu código aqui:

let MAIORDEIDADE = false
let CNH = false
if ((MAIORDEIDADE) === true){
    console.log("maior de 18 anos")
}
else((MAIORDEIDADE) === false);{
    console.log("menor de 18 anos")
}
if ((CNH) === true){
    console.log("tem cnh")
}
else((CNH) === false);{
    console.log("Não tem cnh")
}
let sla1 = `variavel MAIORDEIDADE = ${MAIORDEIDADE}`
let sla2 = `variavel CNH = ${CNH}`

console.log(sla1)
console.log(typeof MAIORDEIDADE)
console.log(sla2)
console.log(typeof CNH)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Undefined e Null
// ------------------------------------------------------------
// a) Declare uma variável "apelido" sem atribuir nenhum valor.
// b) Declare uma variável "enderecoAtual" e atribua null intencionalmente.
// c) Exiba as duas variáveis e seus respectivos tipos (typeof).
// d) Explique (em um comentário) por que typeof null retorna "object".

// → Seu código aqui:
let tataefoda = null
let endereçoatual = null
console.log(tataefoda)
console.log(typeof tataefoda)
console.log(endereçoatual)
console.log(typeof endereçoatual)
console.log("Porque é um erro antigo do JavaScript que nunca foi corrigido para não quebrar códigos antigos.")




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Identificando tipos (typeof)
// ------------------------------------------------------------
// Para cada valor abaixo, use typeof e exiba o resultado no console.
// Tente adivinhar o resultado ANTES de executar!

// 42
// "texto"
// true
// undefined
// null
// 3.14
console.log(typeof 42)
console.log(typeof "texto")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof 3.14)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – DESAFIO: Mini perfil
// ------------------------------------------------------------
// Usando tudo que aprendeu, crie variáveis para armazenar:
//   • nome, idade, altura (número decimal), cidade, estudandoJS (boolean)
// Em seguida, exiba no console uma mensagem completa usando template literal:
//   "Olá! Meu nome é <nome>, tenho <idade> anos, moro em <cidade>,
//    meço <altura>m e estou estudando JavaScript: <estudandoJS>."

// → Seu código aqui:
let nome = "Bruno"
let cidade = "Jaraguá do sul"
let altura = "1,75"
let idade = "16"
let estudandoJS = true
console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade},meço ${altura}m e estou estudando JavaScript:${estudandoJS}`)