// git clone <link do repositório-github> = baixa o repositótio para o pc
// dir = verifica pastas e arquivos no diretório local
// cd <nome da pasta> = vai para pasta / entra na pasta
// code . = abre o vs code na pasta

// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
const Nome = "Bruno"
let Idade = "16"
let Hobby = "jogar"

console.log(`Oi, eu sou o ${Nome}, tenho ${Idade} anos e gosto de ${Hobby} videogame no meu tempo livre.`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:

const Cidade = "São Paulo"
let Temperatura = "21"
console.log(`Hoje em ${Cidade} está fazendo ${Temperatura}°C. Perfeito para um piquenique.`) 



console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:

let Texto = "segundas-feiras"
let qntALUNOS = 23
let sourico = false
let qlqrcoisa
let zero = null

console.log(`a variavel Texto contém o valor:${Texto}, e o seu tipo é:${typeof Texto}.`)
console.log(`a variavel Texto contém o valor:${qntALUNOS}, e o seu tipo é:${typeof qntALUNOS}.`)
console.log(`a variavel Texto contém o valor:${sourico}, e o seu tipo é:${typeof sourico}.`)
console.log(`a variavel Texto contém o valor:${qlqrcoisa}, e o seu tipo é:${typeof qlqrcoisa}.`)
console.log(`a variavel Texto contém o valor:${zeroo}, e o seu tipo é:${typeof Texto}.`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:

const personagem = "Flash"
let idade = 93
const city = "Hiroshima"
let Missão = "desativar a bomba"

console.log(`Em uma manhã ensolarada e comum em ${city}, os moradores avistam um minúsculo ponto preto em meio ao céu se aproximando rapidamente. Reconhecendo a morte evidente pela esmagadora bomba criptonyta, entram em desespero e tantam buscar por abrigo. Embora, a criptonyta desimasse Hiroshima inteira em segundos, algo a interrompeu. E o que seria capaz de tal feito, se não ele? O inigualavel ${personagem}! Que mesmo com os seus ${idade} anos de idade, ainda é muito veloz e experiente. ${personagem} com sua força de aceleração criou uma fenda abaixo da criptonyta e à mandou para o espaço. `)





console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

const vulgo = "Bruno"
let inspiração = "me tornar o melhor dev do senai"
console.log(`2026 eu ${vulgo} alcançarei minha meta de ${inspiração}`)



console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:

console.log("===============================")
console.log("      SISTEMA DO USÚARIO       ")
console.log("===============================")

console.log("1 - Ver Perfil")
console.log("2 - Editar Perfil")
console.log("3 - Configurações")
console.log("4 - Notificações")
console.log("5 - Relatórios")
console.log("6 - Ajuda")
console.log("7 - Sobre o Sistema")
console.log("0 - Sair")

console.log("===============================")
console.log(" DIGITE O NUÚMERO DA OPERAÇÃO  ")
console.log("===============================")



console.log("_______________________________");