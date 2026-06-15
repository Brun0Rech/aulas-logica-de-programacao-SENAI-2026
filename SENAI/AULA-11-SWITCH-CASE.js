// ============================================================
//   ATIVIDADE 08 – Estruturas de Controle (Switch / Case)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// ============================================================

    let readline = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Switch simples com número
// ------------------------------------------------------------
// a) Declare "planeta" com valor 3.
// b) Usando switch/case, exiba o nome do planeta do Sistema Solar
//    correspondente ao número (1 = Mercúrio, 2 = Vênus,
//    3 = Terra, 4 = Marte, 5 = Júpiter, 6 = Saturno,
//    7 = Urano, 8 = Netuno).
// c) No default, exiba: "Planeta não encontrado."

// → Seu código aqui:

    // let planeta = 3

    // switch(planeta){
    //     case 1 :
    //         console.log('mercurio')
    //         break

    //     case 2 : 
    //         console.log('venus')
    //         break

    //     case 3 : 
    //         console.log('terra')
    //         break

    //     case 4 : 
    //         console.log('marte')
    //         break

    //     case 5 : 
    //         console.log('jupiter')
    //         break

    //     case 6 : 
    //         console.log('saturno')
    //         break

    //     case 7 : 
    //         console.log('urano')
    //         break

    //     case 8 : 
    //         console.log('netuno')
    //         break
        
    //     default:
    //         console.log('planeta nao encontrado')
    //         break

    // }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Switch com string
// ------------------------------------------------------------
// a) Declare "direcao" com valor "norte".
// b) Usando switch/case, exiba a mensagem correspondente:
//    - "norte"  → "Seguindo para o Norte ↑"
//    - "sul"    → "Seguindo para o Sul ↓"
//    - "leste"  → "Seguindo para o Leste →"
//    - "oeste"  → "Seguindo para o Oeste ←"
//    - default  → "Direção desconhecida."

// → Seu código aqui:

    // let direcao = 'norte'

    // switch(direcao){
    //     case 'norte' :
    //         console.log('Seguindo para o Norte')
    //         break

    //     case 'sul' : 
    //         console.log('Seguindo para o Sul')
    //         break

    //     case 'oeste' : 
    //         console.log('Seguindo para o Oeste')
    //         break

    //     case 'leste' : 
    //         console.log('Seguindo para o Leste')
    //         break
        
    //     default:
    //         console.log('direcao desconhecida')
    //         break

    // }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Fall-through(cascata) intencional
// ------------------------------------------------------------
// a) Declare "tipoVeiculo" com valor "moto".
// b) Usando fall-through (cases sem break), classifique:
//    - "bicicleta" ou "moto" ou "carro"  → "Veículo leve"
//    - "caminhao" ou "onibus"             → "Veículo pesado"
//    - default                            → "Tipo desconhecido."
// c) Exiba a categoria com template literal.

// → Seu código aqui:

    // let veiculo = 'moto'

    // switch(veiculo){
    //     case 'bicicleta' :
    //     case 'moto'      :
    //     case 'carro'     :
    //         console.log('veiculo leve')
    //         break
        
    //     case 'caminhao'  :
    //     case 'onibus'    : 
    //         console.log('veiculo pesado')
    //             break
        
    //     default:
    //         console.log('veiculo desconhecido')
    //         break
    // }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Switch com input (número)
// ------------------------------------------------------------
// a) Exiba o menu de turnos para o usuário:
//    1 – Manhã | 2 – Tarde | 3 – Noite
// b) Peça ao usuário que escolha um turno (questionInt()).
// c) Com switch/case, exiba a saudação correspondente:
//    - 1 → "Bom dia! Turno da manhã."
//    - 2 → "Boa tarde! Turno da tarde."
//    - 3 → "Boa noite! Turno da noite."
//    - default → "Opção inválida."

// → Seu código aqui:

    // console.log('1 – Manhã | 2 – Tarde | 3 – Noite')

    // let turno = Number(
    //     readline.question('escolha um turno: ')
    // )

    // switch(turno){
    //     case 1 :
    //         console.log('Bom dia! Turno da manha.')
    //         break

    //     case 2 : 
    //         console.log('Boa tarde! Turno da tarde.')
    //         break

    //     case 3: 
    //         console.log('Boa noite! Turno da noite.')
    //         break

    //     default:
    //         console.log('opcao invalida!')
    //         break
    // }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Switch com input (string)
// ------------------------------------------------------------
// a) Pergunte ao usuário qual é a estação do ano favorita dele
//    (question()): "verao", "outono", "inverno" ou "primavera".
// b) Com switch/case, exiba uma descrição curta da estação:
//    - "verao"     → "Dias quentes e férias!"
//    - "outono"    → "Folhas caindo e temperaturas amenas."
//    - "inverno"   → "Frio, cobertores e chocolate quente."
//    - "primavera" → "Flores, calor e renovação."
//    - default     → "Estação não reconhecida."

// → Seu código aqui:

    // let estacao = String(
    //     readline.question('qual e a sua estacao do ano favorita? ')
    // ).toLowerCase()

    // switch(estacao){
    //     case 'verao' :
    //         console.log('Dias quentes e ferias!')
    //         break

    //     case 'inverno'  : 
    //         console.log('Frio, cobertores e chocolate quente.')
    //         break

    //     case 'outono' : 
    //         console.log('Folhas caindo e temperaturas amenas.')
    //         break

    //     case 'primavera' : 
    //         console.log('Flores, calor e renovacao.')
    //         break

    //     default:
    //         console.log('Estacao nao reconhecida.')
    //         break
    // }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Dias da semana com fall-through
// ------------------------------------------------------------
// a) Pergunte ao usuário um número de 1 a 7 (questionInt()).
// b) Usando fall-through intencional:
//    - 1 a 5  → exiba: "Dia útil"
//    - 6 ou 7 → exiba: "Final de semana"
//    - default → "Número inválido"

// → Seu código aqui:

    // let number = Number(
    //     readline.question('escolha um numero de 1 a 7: ')
    // )

    // switch(number){
    //     case 1 :
    //     case 2 :
    //     case 3 :
    //     case 4 :
    //     case 5 :
    //         console.log('dia util')
    //         break
        
    //     case 6 :
    //     case 7 : 
    //         console.log('final de semana')
    //             break
        
    //     default:
    //         console.log('numero invalido')
    //         break
    // }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Switch com objeto
// ------------------------------------------------------------
// a) Crie um objeto "produto" com as propriedades, perguntando ao usuário:
//    - nome
//    - categoria: número de 1 a 4 | 1 – Eletrônico | 2 – Vestuário | 3 – Alimento | 4 – Livro
//    - preco
// b) Com switch/case na categoria:
//    - 1 → adicione ao objeto: descricaoCategoria: "Eletrônico" e garantia: "12 meses"
//    - 2 → adicione ao objeto: descricaoCategoria: "Vestuário" e garantia: "Troca em 30 dias"
//    - 3 → adicione ao objeto: descricaoCategoria: "Alimento" e garantia: "Ver validade"
//    - 4 → adicione ao objeto: descricaoCategoria: "Livro" e garantia: "Sem garantia"
//    - default → adicione ao objeto: descricaoCategoria: "Categoria invalida" e garantia: "Sem garantia". Também exiba no console: "Categoria inválida."
// c) Exiba o objeto com console.table().

// → Seu código aqui:

    // let produto = {}

    // produto.nome = String(
    //     readline.question(' nome do produto: ')
    // )
    
    // produto.categoria = Number(
    //     readline.question(' 1  Eletronico | 2  Vestuario | 3  Alimento | 4  Livro \n escolha uma categoria: ')
    // )

    // produto.preco = Number(
    //     readline.question(' preco do produto: ')
    // )

    // switch(produto.categoria){
    //     case 1:
    //         produto.garantia = '12 meses'
    //         produto.categoria = 'Eletronico'
    //         break

    //     case 2:
    //         produto.garantia = 'Troca em 30 dias'
    //         produto.categoria = 'Vestuario'
    //         break
    //     case 3:

    //         produto.garantia = 'Ver validade'
    //         produto.categoria = 'Alimento'
    //         break

    //     case 4:
    //         produto.garantia = 'Sem garantia'
    //         produto.categoria = 'Livro'
    //         break

    //     default:

    //         produto.categoria = 'categoria invalida'
    //         produto.garantia = 'sem garantia'

    //         console.log(produto.categoria)
    //         break
    // }

    // console.table(produto)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Conversor de nota para conceito e cor
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome
//    - Nota de 0 a 10 (questionInt()).
// b) Descubra o conceito de acordo com a nota, utilizando switch/case e adicione ao objeto o conceito e a mensagem correspondente.
//    - 10 ou 9  → conceito: "A", mensagem: "Excelente!"
//    - 8 ou 7   → conceito: "B", mensagem: "Muito bom!"
//    - 6 ou 5   → conceito: "C", mensagem: "Suficiente."
//    - 4 ou 3   → conceito: "D", mensagem: "Em recuperação."
//    - 2, 1 ou 0 → conceito: "F", mensagem: "Reprovado."
//    - default  → "Nota inválida."
// c) Exiba: "<nome> – Nota: <nota> | Conceito: <conceito> | <mensagem>"

// → Seu código aqui:

    // let aluno = {}

    // aluno.nome = String(
    //     readline.question('nome do aluno: ')
    // )

    // aluno.nota = Number(
    //     readline.question(`nota de ${aluno.nome}: `)
    // )

    // switch(aluno.nota){
    //     case 10:
    //     case 9:
    //         aluno.conceito = 'A'
    //         aluno.mensagem = 'Excelente!'
    //         break

    //     case 8:
    //     case 7:
    //         aluno.conceito = 'B'
    //         aluno.mensagem = 'Muito Bom!'
    //         break
        
    //     case 6:
    //     case 5:
    //         aluno.conceito = 'C'
    //         aluno.mensagem = 'suficiente.'
    //         break
        
    //     case 4:
    //     case 3:
    //         aluno.conceito = 'D'
    //         aluno.mensagem = 'em recuperacao'
    //         break

    //     case 2:
    //     case 1:
    //     case 0:
    //         aluno.conceito = 'F'
    //         aluno.mensagem = 'reprovado.'
    //         break

    //     default:
    //         console.log('nota invalida')
    // }

    // console.table(aluno)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Calculadora com switch
// ------------------------------------------------------------
// a) Pergunte ao usuário dois números (questionFloat()).
// b) Exiba o menu de operações:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão | 5 – Resto
// c) Peça ao usuário que escolha uma operação (questionInt()).
// d) Com switch/case, calcule e exiba o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Se a operação for 4 (divisão) e o divisor for 0, exiba:
//    "Erro: divisão por zero não é permitida."
//    No default, exiba: "Operação inválida."

// → Seu código aqui:

    // let number01 = Number(
    //     readline.question('digite um numero: ')
    // )

    //  let number02 = Number(
    //     readline.question('digite outro numero: ')
    // )
    
    // console.log('1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão | 5 – Resto')

    // let operacao = Number(
    //     readline.question('escolha uma operacao: ')
    // )

    // let resultado = 0
    // let simbolo = ''

    // switch(operacao){
    //     case 1:
    //         resultado = number01 + number02
    //         simbolo = '+'
    //         console.log(`\n${number01} ${simbolo} ${number02} = ${resultado}`)
    //         break

    //     case 2:
    //         resultado = number01 - number02
    //         simbolo = '-'
    //         console.log(`\n${number01} ${simbolo} ${number02} = ${resultado}`)
    //         break

    //     case 3:
    //         resultado = number01 * number02
    //         simbolo = '×'
    //         console.log(`\n${number01} ${simbolo} ${number02} = ${resultado}`)
    //         break

    //     case 4:
    //         if(number02 == 0){
    //             console.log('\noperacao nao permitida (divisao por 0)')
    //             break
    //         }
    //         resultado = number01 / number02
    //         simbolo = '÷'
    //         console.log(`\n${number01} ${simbolo} ${number02} = ${resultado.toFixed(2)}`)
    //         break

    //     case 5:
    //         resultado = number01 % number02
    //         simbolo = '%'
    //         console.log(`\n${number01} ${simbolo} ${number02} = ${resultado}`)
    //         break

    //     default:
    //         console.log('\noperacao invalida')
    //         break
    // }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de loja completo
// ------------------------------------------------------------
// a) Crie um objeto "loja" com:
//    - nome: "TechShop"
//    - saldo: 0
// b) Exiba o menu:
//    1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair
// c) Peça ao usuário uma opção (questionInt()).
// d) Com switch/case:
//    - 1 → exiba uma lista fixa de 3 produtos com preços usando console.table()
//          (ex: [{ produto: "Mouse", preco: 89.90 }, ...])
//    - 2 → pergunte qual produto e o preço (question + questionFloat),
//          adicione ao saldo e exiba: "Produto adicionado ao carrinho."
//    - 3 → exiba: "Total no carrinho: R$ <saldo>"
//    - 4 → exiba: "Obrigado por visitar a TechShop!"
//    - default → exiba: "Opção inválida."

// → Seu código aqui:

    // let loja = {
    //     nome: 'TechShop',
    //     produtos: [
    //         { produto: 'mouse', preco: 70 },
    //         { produto: 'teclado', preco: 120 },
    //         { produto: 'monitor', preco: 750 }
    //     ]
    // };

    // let cliente = {
    //     carrinho: [],
    //     saldo: 0
    // };

    // function menu() {
    //     console.log('=== TECHSHOP ===\n')
    //     console.log('1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair')
    //     return Number(
    //         readline.question('O que voce deseja? ')
    //     );
    // }

    // let opcao = 0

    // while (opcao !== 4) {

    //     opcao = menu()

    //     switch (opcao) {

    //         case 1:
    //             console.table(loja.produtos)
    //             break;

    //         case 2:

    //             let produtoDigitado = String(
    //                 readline.question('Qual produto deseja comprar? ').toLowerCase()
    //             )

    //             let encontrou = false

    //             for (let produto of loja.produtos) {

    //                 if (produto.produto.toLowerCase() === produtoDigitado) {

    //                     cliente.carrinho.push(produto)
    //                     cliente.saldo += produto.preco

    //                     console.log('Produto adicionado ao carrinho!')
    //                     encontrou = true

    //                     break
    //                 }
    //             }

    //             if(!encontrou){
    //                     console.log('produto nao encontrado')
    //                     break
    //             }

                

    //         case 3:

    //             console.log('=== CARRINHO ===')

    //             if (cliente.carrinho.length === 0) {
    //                 console.log('Carrinho vazio.')
    //             } else {
    //                 console.table(cliente.carrinho)
    //                 console.log(`Total: R$ ${cliente.saldo}`)
    //             }

    //             break;

    //         case 4:
    //             console.log('Obrigado por visitar a TechShop!')
    //             break

    //         default:
    //             console.log('Opcao invalida!')
    //     }
    // }

    

console.log("_______________________________");
