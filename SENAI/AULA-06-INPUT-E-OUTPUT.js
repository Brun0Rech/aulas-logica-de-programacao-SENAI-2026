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

//let nome = "Bruno"

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

//usuario 1
// let n_user1 = LerTeclado.question("Nome de Usuario:")
// let i_user1 = LerTeclado.questionInt("Digite sua idade:")
// let city_user1 = LerTeclado.question("Sua Cidade:")
// let r_user1 = LerTeclado.question("Nome da rua:")
// let c_user1 = LerTeclado.questionInt("Numero da sua casa:")

// let user1 = {
//     nome: n_user1,
//     idade: i_user1,
//     endereco:
//     {
//         cidade: city_user1,
//         rua: r_user1,
//         casa:c_user1
//     }
// }

// //usuario 2
// let n_user2 = LerTeclado.question("Nome de Usuario:")
// let i_user2 = LerTeclado.questionInt("Digite sua idade:")
// let city_user2 = LerTeclado.question("Sua Cidade:")
// let r_user2 = LerTeclado.question("Nome da rua:")
// let c_user2 = LerTeclado.questionInt("Numero da sua casa:")

// let user2 = {
//     nome: n_user2,
//     idade: i_user2,
//     endereco:
//     {
//         cidade: city_user2,
//         rua: r_user2,
//         casa:c_user2
//     }
// }

// //usuario 3
// let n_user3 = LerTeclado.question("Nome de Usuario:")
// let i_user3 = LerTeclado.questionInt("Digite sua idade:")
// let city_user3 = LerTeclado.question("Sua Cidade:")
// let r_user3 = LerTeclado.question("Nome da rua:")
// let c_user3 = LerTeclado.questionInt("Numero da sua casa:")

// let user3 = {
//     nome: n_user3,
//     idade: i_user3,
//     endereco:
//     {
//         cidade: city_user3,
//         rua: r_user3,
//         casa:c_user3
// }
// }

// let lista_user = [user1, user2, user3]

// console.table(lista_user)

// console.log(user2.nome, user2.idade)

// console.table(user3.endereco)

// console.log(user1.nome, user1.endereco.rua)




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

// let aluno01 = LerTeclado.question("Nome do aluno:")
//     let n01_aluno01 = LerTeclado.question(`Nota 1 do aluno ${aluno01}: `)
//     let n02_aluno01 = LerTeclado.question(`Nota 2 do aluno ${aluno01}: `)
//     let n03_aluno01 = LerTeclado.question(`Nota 3 do aluno ${aluno01}: `)

// let aluno02 = LerTeclado.question("Nome do aluno:")
//     let n01_aluno02 = LerTeclado.question(`Nota 1 do aluno ${aluno02}: `)
//     let n02_aluno02 = LerTeclado.question(`Nota 2 do aluno ${aluno02}: `)
//     let n03_aluno02 = LerTeclado.question(`Nota 3 do aluno ${aluno02}: `)

// let aluno03 = LerTeclado.question("Nome do aluno:")
//     let n01_aluno03 = LerTeclado.question(`Nota 1 do aluno ${aluno03}: `)
//     let n02_aluno03 = LerTeclado.question(`Nota 2 do aluno ${aluno03}: `)
//     let n03_aluno03 = LerTeclado.question(`Nota 3 do aluno ${aluno03}: `)


// let dev1 = {
//     nome: aluno01,
//     nota1: n01_aluno01,
//     nota2: n02_aluno01,
//     nota3: n03_aluno01
// }

// let dev2 = {
//     nome: aluno02,
//     nota1: n01_aluno02,
//     nota2: n02_aluno02,
//     nota3: n03_aluno02
// }

// let dev3 = {
//     nome: aluno03,
//     nota1: n01_aluno03,
//     nota2: n02_aluno03,
//     nota3: n03_aluno03
// }

// let turma = [dev1, dev2, dev3]

// console.table(turma)

// console.log(dev2.nome, dev2.nota1)
// console.log(dev3.nome, dev3.nota2)
// console.log(dev1.nome, dev1.nota3)

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

// let n_produto = LerTeclado.question("nome do seu produto: ")
// let c_produto = LerTeclado.question("categoria do seu produto: ")
// let q_estoque = LerTeclado.question("quantidade em estoque: ")
// let disponibilidade = LerTeclado.keyInYN("esta a venda? ")

// let produto = {
//     nome: n_produto,
//     categoria:c_produto,
//     quantidade_em_estoque:q_estoque,
//     disponivel: disponibilidade
// }

// console.table(produto)

// console.log(`Produto: ${produto.nome} | Categoria:  ${produto.categoria} | Estoque:  ${produto.quantidade_em_estoque} un, estado de disponibilidade:  ${produto.disponivel}.`)

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

//medicamento 1
let n_medicamento1 = LerTeclado.question("nome do medicamento: ")
let p_medicamento1 = LerTeclado.question("preco do medicamento: ")
let em_estoque1 = LerTeclado.keyInYN("tem em estoque? ")

//medicamento 2
let n_medicamento2 = LerTeclado.question("nome do medicamento: ")
let p_medicamento2 = LerTeclado.question("preco do medicamento: ")
let em_estoque2 = LerTeclado.keyInYN("tem em estoque? ")

let medicamento1 = {
    nome: n_medicamento1,
    preco: p_medicamento1,
    estoque: em_estoque1
}

let medicamento2 = {
    nome: n_medicamento2,
    preco: p_medicamento2,
    estoque: em_estoque2
}

let estoqueFarmacia = []

estoqueFarmacia.push(medicamento1)
estoqueFarmacia.push(medicamento2)

console.table(estoqueFarmacia)

console.log(medicamento2.nome, medicamento2.preco )
console.log(`o medicamento ${medicamento1.nome} ${em_estoque1 ? 'esta em estoque' : 'nao esta em estoque'} `)







