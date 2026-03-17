// ============================================================
// ATIVIDADE AVALIATIVA N4
// Módulos: Variáveis, Tipos (primitivos e compostos), Arrays e Objetos, Input e Output de Dados
// ============================================================
//
// Instruções Gerais:
// • Copie todo este exercício para um novo arquivo em sua pasta de atividades
// • Nomeie o seu novo arquivo como "atividade-avaliativa-n4.js"
// • Resolva cada exercício no espaço indicado.
// • Utilize template literals sempre que precisar montar frases.
// • NÃO apague os separadores (console.log("_________")).
// • Leia com atenção cada enunciado antes de começar.
// • Cada letra representa um passo. Resolva na ordem.
//
// ============================================================

let ler_teclado = require('readline-sync')

// ------------------------------------------------------------
// QUESTÃO 1 (peso: 0.5) – Construindo um cartão de visita no console
// ------------------------------------------------------------
// a) Crie variáveis para armazenar as seguintes informações REAIS ou FICTÍCIAS:
// • nome (string)
// • profissao (string)
// • cidade (string)
// • email (string)
// • telefone (string)
// • anoExperiencia (number)
// • disponivelParaFreelance (boolean)
// b) Peça ao usuário para preencher as informações do cartão de visitas.
// c) Usando console.log() e template literals, exiba no console
// um cartão de visitas formatado, parecido com o modelo abaixo:
//
// ============================================
// | CARTÃO DE VISITAS |
// ============================================
// | Nome : <nome> |
// | Profissão : <profissao> |
// | Cidade : <cidade> |
// | E-mail : <email> |
// | Telefone : <telefone> |
// | Experiência : <anosExperiencia> anos |
// | Freelance : <disponivelParaFreelance> |
// ============================================

// → Seu código aqui:

// let nome = ler_teclado.question("digite seu nome: ")
// let profissao = ler_teclado.question("digite sua profissao: ")
// let cidade = ler_teclado.question("digite o nome da sua cidade: ")
// let email = ler_teclado.question("digite seu endereco de email: ")
// let telefone = ler_teclado.questionInt("digite seu numero de telefone: ")
// let tempo_experiencia = ler_teclado.questionInt("ha quanto tempo atua na area?: ")
// let disp_freelance = ler_teclado.keyInYN("esta disponivel para freelancer?: ")

// console.log(`

// // | CARTÃO DE VISITAS |
// // ============================================
// // | Nome : ${nome} |
// // | Profissão : ${profissao} |
// // | Cidade : ${cidade} |
// // | E-mail : ${email} |
// // | Telefone : ${telefone} |
// // | Experiência : ${tempo_experiencia} anos |
// // | Freelance : ${disp_freelance ? 'sim' : 'nao'} |
// // ============================================
// `)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 2 (peso: 0.5) – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie um array chamado "materias" com pelo menos 5 disciplinas escolares.
// b) Exiba a primeira e a última matéria usando seus índices.
// c) Exiba a quantidade total de matérias usando .length.
// d) Usando template literal, exiba a frase:
// "A 3ª matéria da lista é <...> e a lista tem <...> matérias no total."

// → Seu código aqui:

// let materias = ["matematica", "portugues", "quimica", "fisica", "geografia"]

// console.log(`item 1 da lista materias:${materias[0]}`)
// console.log(`item 5 da lista materias:${materias[4]}`)

// console.log(materias.length)

// console.log(`A 3ª matéria da lista é ${materias[3]} e a lista tem ${materias.length} matérias no total.`)



console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 3 (peso: 0.5) – Manipulação direta de posições
// ------------------------------------------------------------
const notas = [6.5, 8.0, 4.5, 9.0, 7.5];

// a) Substitua a nota do índice 2 (4.5) pelo valor 6.0 usando atribuição direta.
// b) Substitua a nota do índice 3 (9.0) pelo valor 8.5 usando atribuição direta.
// c) Exiba o array atualizado.

// → Seu código aqui:

// notas[2] = 6.0

// notas[3] = 8.5

// console.log(notas)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 4 (peso: 0.5) – Métodos de array: push, pop, unshift, shift
// ------------------------------------------------------------
// Usando o array "materias" da questão anterior e as funções de array listadas acima:
// a) Adicione "Educação Física" ao FINAL da lista e exiba a lista.
// b) Remova o ÚLTIMO elemento da lista e exiba a lista.
// c) Adicione "Filosofia" ao INÍCIO da lista e exiba a lista.
// d) Remova o PRIMEIRO elemento da lista e exiba a lista.
// e) Após todas as operações, exiba quantos itens restaram.

// → Seu código aqui:

// let materias = ["matematica", "portugues", "quimica", "fisica", "geografia"]

// materias.push('educacao fisica')

// console.log(materias)

// materias.pop()

// console.log(materias)

// materias.shift()

// console.log(materias)

// console.log(materias.length)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 5 (peso: 0.5) – indexOf, includes, slice e concat
// ------------------------------------------------------------
const cidadesBrasil = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Manaus", "Fortaleza"];
const cidadesPortugal = ["Lisboa", "Porto", "Braga"];

// Utilizando as listas e as funções de array listadas acima:
// a) Verifique em qual índice está "Curitiba" e exiba o resultado.
// b) Verifique em qual índice está "Recife" (que NÃO existe na lista) e exiba.
// O que significa esse retorno? Escreva a explicação em um comentário.
// c) Use includes() para verificar se "Salvador" está na lista. Exiba o resultado.
// d) Use includes() para verificar se "Belém" está na lista. Exiba o resultado.
// e) Use concat() para unir "cidadesBrasil" e "cidadesPortugal" em um novo array "todasAsCidades".
// Exiba o novo array.
// f) Use slice() para criar um novo array "cidadesDoMeio" com apenas os elementos
// do índice 3 ao 7 de "todasAsCidades". Exiba o resultado.

// → Seu código aqui:

// console.log(cidadesBrasil.indexOf("Curitiba"))
// console.log(cidadesBrasil.indexOf("Recife"))
// // o termo -1 é usado pra indicar que esse valor nao pode ser encocntrado

// console.log(cidadesBrasil.includes("Salvador"))
// console.log(cidadesBrasil.includes("Belem"))

// let todas_cidades = cidadesBrasil.concat(cidadesPortugal)
// console.log(todas_cidades)

// let cidades_meio = todas_cidades.slice(3, 7)
// console.log(cidades_meio)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 6 (peso: 0.5) – Arrays mistos e flat
// ------------------------------------------------------------
// a) Crie um array aninhado (arrays dentro de outro array) chamado "grupos", conforme exemplo abaixo:
// [
// ["Ana", "Bruno", "Carlos"],
// ["Diana", "Eduardo"],
// ["Fernanda", "Gabriel", "Helena", "Igor"]
// ]
// b) Exiba "grupos".
// c) Exiba o nome do 2º aluno do 3ª grupo (antes de usar flat, usando índices).
// d) Use flat() para transformar "grupos" em um único array chamado "todosOsAlunos" e exiba o resultado.
// e) Exiba o tamanho total do array "grupos" e do array "todosOsAlunos". Explique porque desses valores serem diferentes, se os dados são os mesmos

// → Seu código aqui:

// let grupos = [
//     ["Ana", "Bruno", "Carlos"],
//     ["Diana", "Eduardo"],
//     ["Fernanda", "Gabriel", "Helena", "mateus"]
// ]

// console.log(`grupo 1:${grupos[0]}`)
// console.log(`grupo 2:${grupos[1]}`)
// console.log(`grupo 2:${grupos[2]}`)
// console.log(`segundo aluno do gp3:${grupos[2][1]}`)

// let todos_Alunos = grupos.flat()
// console.log(todos_Alunos)

// console.log(`tamanho total variavel grupos:${grupos.length}`)
// console.log(`tamanho total variavel todos_Alunos:${todos_Alunos.length}`)
// // a variavel grupos vai conter menos itens porque cada lista dentro de grupos, corresponde a um item independentemente dos valores escritos dentro das sub-listas. Enquanto, a variavel todos alunos vai possuir mais itens, porque os itens antes dentro de listas, agora representam um valor inteiro.

console.log("_______________________________");



// ------------------------------------------------------------
// QUESTÃO 7 (peso: 0.5) – Criando e acessando objetos
// ------------------------------------------------------------
// a) Crie um objeto chamado "produto" com as propriedades:
// nome (string), preco (number), disponivel (boolean), categoria (string).
// b) Exiba cada propriedade separadamente usando um console.log() para cada.
// c) Usando template literal, exiba:
// "O produto '<nome>' custa R$ <preco> e está disponível: <disponivel>."
// d) Exiba o objeto utilizando console.table().

// → Seu código aqui:

// const produto = {
//     nome: "Notebook",
//     preco: 3500.00,
//     disponivel: true,
//     categoria: "Eletrônicos"
//   };
  
  
//   console.log(produto.nome);
//   console.log(produto.preco);
//   console.log(produto.disponivel);
//   console.log(produto.categoria);
  
 
//   console.log(`O produto ${produto.nome} custa R$ ${produto.preco} e está disponível: ${produto.disponivel}.`);
  

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 8 (peso: 0.5) – Alterando e adicionando propriedades
// ------------------------------------------------------------
// Usando o objeto "produto" da questão anterior:
// a) Altere o preço para um valor diferente.
// b) Altere "disponivel" para o valor oposto ao atribuido anteriormente.
// c) Adicione uma nova propriedade "estoque" com o valor 20.
// d) Exiba o objeto completo.

// → Seu código aqui:

// let produto = {
//     nome: 'bolacha',
//     preco: 13.5,
//     disponivel: true,
//     categoria: 'alimentos'
// }

// produto.preco = 9.5
// console.log(produto.preco)

// produto.disponivel = false
// console.log(produto.disponivel)

// produto.estoque = 20

// console.log(produto)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 9 (peso: 1) – Array de objetos
// ------------------------------------------------------------
// a) Crie um array chamado "listaFuncionarios" com 3 objetos.
// Cada objeto deve ter: nome (string), cargo (string), salario (number), ativo (boolean).
// b) Exiba o nome do primeiro funcionário.
// c) Exiba o cargo do terceiro funcionário.
// d) Exiba o salário do segundo funcionário.
// e) Altere o cargo do primeiro funcionário para um cargo diferente.
// f) Crie um novo objeto e armazene-o em uma variável.
// g) Adicione esse 4º funcionário no array "listaFuncionarios" com push().
// h) Exiba o array completo após todas as alterações.

// → Seu código aqui:

// let listaFuncionario = LerTeclado.question('funcionario:')  
// let nome_funcionario = LerTeclado.question(` Nome do funcionario01 ${funcionario}: `)
// let cargo_funcionario = LerTeclado.question(` Nome do funcionario01 ${funcionario}: `)
// let salario_funcionario = LerTeclado.question(` Nome do funcionario01 ${funcionario}: `)

// let listaFuncionarios1 = LerTeclado.question('funcionario:')  
// let nome_funcionario01 = LerTeclado.question(` Nome do funcionario01 ${funcionario01}: `)
// let cargo_funcionario01 = LerTeclado.question(` Nome do funcionario01 ${funcionario01}: `)
// let salario_funcionario01 = LerTeclado.question(` Nome do funcionario01 ${funcionario01}: `)

// let listaFuncionarios2 = LerTeclado.question('funcionario:')  
// let nome_funcionario02 = LerTeclado.question(` Nome do funcionario02 ${funcionario02}: `)
// let cargo_funcionario02 = LerTeclado.question(` Nome do funcionario02 ${funcionario02}: `)
// let salario_funcionario02 = LerTeclado.question(` Nome do funcionario02 ${funcionario02}: `)

// let listaFuncionarios3 = LerTeclado.question('funcionario:')  
// let nome_funcionario03 = LerTeclado.question(` Nome do funcionario03 ${funcionario03}: `)
// let cargo_funcionario03 = LerTeclado.question(` Nome do funcionario03${funcionario03}: `)
// let salario_fuincionario03 = LerTeclado.question(` Nome do funcionario03 ${funcionario03}: `)

// let func1 = {
    
//     nome: pedro,
//     cargo: pedreiro,
//      salario: 4000,
//      }

//  let func2 = {
//     nome: bruno,
//     cargo: pedreiro,
//      salario: 4000,
//  }

//  let func3 = {
//     nome: mateus,
//     cargo: pedreiro,
//      salario: 4000,
//     }
// console.push(listaFuncionarios);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 10 (peso: 1.5) – Objetos com arrays e objetos aninhados
// ------------------------------------------------------------
// a) Crie um objeto "loja" com as propriedades:
// • nomeLoja (string)
// • cnpj (string)
// • endereco → objeto contendo: rua, numero, cidade, estado
// • categoriasProdutos → array com pelo menos 3 categorias
// • aberta (boolean)
// b) Exiba o nome da loja.
// c) Exiba a cidade onde a loja está localizada.
// d) Exiba a primeira categoria de produto.
// e) Exiba, usando template literal, a frase:
// "A loja '<nomeLoja>' fica em <cidade> - <estado> e está aberta: <aberta>."
// f) Adicione uma nova categoria ao final do array "categoriasProdutos".
// g) Exiba, usando template literal, a frase:
// "Algumas categorias da loja '<nomeLoja>' são: <primeira categoria> e <última categoria> ."
// h) Exiba o objeto "loja" completo.

// → Seu código aqui:

// let loja = {
//     nome: 'flavor',
//     cnpj: 190,
//     endereco: {
//         rua: 'rua ferreira',
//         numero: '367',
//         cidade: 'jaragua',
//         estado: 'santa catarina',
//     },
//     categoriasProdutos: ["cosmeticos","carnes", "eletronicos"],
//     aberta: true
// }

// console.log(loja.nome)
// console.log(loja.endereco.cidade)
// console.log(loja.categoriasProdutos[0])
// console.log(`A loja ${loja.nome} fica em ${loja.endereco.cidade},${loja.endereco.estado} e está: ${loja.aberta ? 'aberta' : 'fechada'}.`)

// console.log(loja)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 11 (peso: 1.5) – Objetos complexos com array de objetos aninhado
// ------------------------------------------------------------
// a) Crie um objeto "escola" com as seguintes propriedades:
// • nomeEscola (string)
// • cidade (string)
// • diretor → objeto com: nome (string), tempoDeServico (number)
// • turmas → array contendo 2 objetos, cada um com:
// - período (string) - ex: "Manhã", "Tarde"
// - alunos → array de strings com pelo menos 3 nomes
// b) Exiba o nome da escola.
// c) Exiba o nome do diretor.
// d) Exiba o período da segunda turma.
// e) Exiba o terceiro aluno da primeira turma.
// f) Adicione um novo aluno à segunda turma usando push().
// g) Altere o período da primeira turma para "Noite".
// h) Exiba o objeto "escola" completo no final.

// → Seu código aqui:

//     const escola = {
//     nomeEscola: "Julius Karsten",
//     cidade: "Jaraguá do Sul",
    
//     diretor: {
//       nome: "Carlos Silva",
//       tempoDeServico: 10
//     },
  
//     turmas: [
//       {
//         periodo: "Manhã",
//         alunos: ["Ana", "Bruno", "Carla"]
//       },
//       {
//         periodo: "Tarde",
//         alunos: ["Daniel", "Eduarda", "Felipe"]
//       }
//     ]
//   };

// console.log(escola.nomeEscola);
// console.log(escola.diretor.nome);
// console.log(escola.turmas[1].periodo);
// console.log(escola.turmas[0].alunos[2]);
// escola.turmas[1].alunos.push("Gabriel");
// console.log(escola.turmas[1].alunos);
// console.log(escola.turmas[0].periodo)
// console.log(escola)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 12 (peso: 2) – Sistema de Biblioteca
// ------------------------------------------------------------
//
// Você vai criar a estrutura de dados de uma biblioteca simples.
// Todos os dados dos passos A e B devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A: Variáveis da biblioteca
// • Colete os dados para as seguintes variáveis/constantes:
// - "nomeBiblioteca" (string) → nome da biblioteca
// - "anoDeFundacao" (number) → ano de fundação
// - "capacidadeLivros" (number) → quantidade máxima de livros
// - "bibliotecaAberta" (boolean)→ true ou false
// • Exiba todas usando template literal em uma única frase descritiva.
//
// PASSO B: Acervo de livros (array de objetos)
// • Crie um array chamado "acervo" com 3 objetos de livros.
// Cada livro deve ter:
// - titulo (string)
// - autor (string)
// - ano (number)
// - paginas (number)
// - disponivel (boolean)
//
// PASSO C: Acessando o acervo
// • Exiba o título do 1º livro.
// • Exiba o autor do 2º livro.
// • Exiba o número de páginas do 3º livro.
// • Exiba a quantidade total de livros no acervo (.length).
//
// PASSO D: Alterando o acervo
// • Marque o 1º livro como indisponível (disponivel = false).
// • Altere o título do 3º livro para um título diferente.
// • Adicione um 4º livro ao array "acervo" usando push(),
// criando o objeto diretamente dentro do push (sem necessidade de coletar esse dado via terminal).
//
// PASSO E: Seções da biblioteca (array de strings)
// • Crie um array "secoes" com: "Ficção", "Ciências", "História", "Infantil".
// • Exiba a primeira e a última seção.
// • Adicione "Tecnologia" ao final de "secoes".
// • Remova a primeira seção de "secoes".
// • Exiba o array "secoes".
//
// PASSO F: Relatório final
// • Usando template literals, exiba um relatório/frase com:
// - Nome e ano de fundação da biblioteca
// - Quantidade de livros no acervo
// - Quantidade de seções disponíveis
// - Título e autor de CADA livro do acervo (um livro por linha)
//
// → Seu código aqui:


// let nome_biblioteca = "biblioteca do bruno"
// let ano_fundacao = ler_teclado.question("ano de fundacao: ")
// let capacidade_livros = ler_teclado.question("qual a capacidade de livros? ")
// let biblioteca_aberta = ler_teclado.keyInYN("a biblioteca esta aberta? ")

// let livros = [
//     livro1 = {
//         titulo: "romance",
//         autor: "mateus",
//         ano: "1900",
//         paginas: "100",
//         disponivel: true
//     },

//     livro2 = {
//         titulo: "carecas",
//         autor: "calvo",
//         ano: "1900",
//         paginas: "100",
//         disponivel: true
//     },
//     livro3 = {
//         titulo: "cachorro",
//         autor: "pedro",
//         ano: "1900",
//         paginas: "100",
//         disponivel: true
//     }
// ]
 
// console.log(livros[0].titulo)
// console.log(livros[1].autor)
// console.log(livros[2].paginas)
// console.log(livros.length)

// livros[0].disponivel = false
// livros[2].titulo = "ida a lua"

// livros.push(livro4 = {
//     titulo: "pe grande",
//         autor: "pedro",
//         ano: "1900",
//         paginas: "100",
//         disponivel: true
// })

// console.log(livros.length)

// let secoes_biblioteca = ["Ficção", "Ciências", "História", "Infantil"]
// secoes_biblioteca.push("tecnologia")
// secoes_biblioteca.shift()

// console.log(secoes_biblioteca)
// console.log(`A biblioteca ${nome_biblioteca}, fundada em ${ano_fundacao}, possui atualmente ${capacidade_livros} livros em seu acervo e ${secoes_biblioteca.length} seções disponíveis.

// Livros disponíveis no acervo:
// ${livro1.titulo} - ${livro1.autor}
// ${livro3.titulo} - ${livro2.autor}
// ${livro1.titulo} - ${livro3.autor}`)
console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 13 (questão bonus - peso: 1) – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
// • Crie um objeto "restaurante" com:
// - nome (string)
// - tipoCozinha (string) ex: "Italiana", "Japonesa"
// - nota (number) ex: 8.7
// - aberto (boolean)
// - endereco → objeto com: rua, numero, bairro, cidade
// - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
// • nomePrato (string)
// • preco (number)
// • vegano (boolean)
//
// PASSO B: Acessos e exibições
// • Exiba o nome do restaurante e sua nota.
// • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
// • Exiba o nome e o preço do 1º prato do cardápio.
// • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
// • Altere o preço do 2º prato para um valor diferente.
// • Adicione um novo prato ao cardápio usando push().
// • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
// • Usando console.log() e template literals, exiba:
// - Nome do restaurante, tipo de cozinha e nota
// - Status: aberto ou fechado
// - Quantos pratos há no cardápio (.length)
// - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:


console.log("_______________________________");