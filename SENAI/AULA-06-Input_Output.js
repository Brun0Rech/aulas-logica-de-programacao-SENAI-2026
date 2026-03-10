// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================

let LerTeclado = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:

// console.log("Iniciando Programa...")
// console.info("Você está offline")
// console.warn("Deseja mesmo instalar o arquivo x? Pode conter vírus")
// console.error("Login incorreto")


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:

// let nome = LerTeclado.question("Digite seu nome de usuario:")
// let idade = LerTeclado.questionInt("Digite sua idade:")
// console.log(`Olá, ${nome}, você tem ${idade} anos.`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

// let nomeUsuario = LerTeclado.question("Digite seu nome:")
// let idadeUsuario = LerTeclado.question("Digite sua idade:")
// let cidadeUsuario = LerTeclado.question("De que cidade voce e?:")

// let ficha = {
//     nome: nomeUsuario,
//     idade: idadeUsuario,
//     cidade: cidadeUsuario
// }

// console.table(ficha)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:

let nome = "Bruno"

// let perguntas01 = LerTeclado.keyInYN("Você gosta de animais? ")  n
// let perguntas02 = LerTeclado.keyInYN("Você gosta de praia? ")  y
// let perguntas03= LerTeclado.keyInYN("Você gosta de festas?") y

// console.log(` Bruno ${perguntas01 ? 'gosta de animais' : 'detesta animais'}, mas ${perguntas02 ?'gosta de praias' : 'odeia praias'} e ${perguntas03 ?'tambem gosta de festas' : 'nao curte muito festas'}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

// let comida01 = LerTeclado.question("Qual a sua comida favorita? ")
// let comida02 = LerTeclado.question("Sua segunda comida favorita? ")
// let comida03 = LerTeclado.question("Sua terceira comida favorita? ")

// let comidasfavoritas = [comida01, comida02, comida03]

// console.table(comidasfavoritas)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:

// let nomeUsuario = LerTeclado.question("Nome de Usuario:")
// let profissaoUsuario = LerTeclado.question("Sua profissao:")
// let cidadeUsuario = LerTeclado.question("Sua Cidade:")

// let cadastropessoal = {
//     nome: nomeUsuario,
//     profissao: profissaoUsuario,
//     cidade: cidadeUsuario
// }

// console.log(`Me chamo ${cadastropessoal.nome}. Profissão: ${cadastropessoal.profissao} e moro na cidade de: ${cadastropessoal.cidade}.`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

let nomeUsuario01 = LerTeclado.question("Nome de Usuario:")
let idadeUsuario01 = LerTeclado.question("Digite sua idade:")
let cidadeUsuario = LerTeclado.question("Sua Cidade:")
let ruaUsuario = LerTeclado.question("Nome da rua:")
let casaUsuario = LerTeclado.question("Numero da sua casa:")

let endereco = {
    cidade: cidadeUsuario,
    rua: ruaUsuario,
    numerocasa: casaUsuario
}


let ListaUsuario = [usuario01, usuario02, usuario03]




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.