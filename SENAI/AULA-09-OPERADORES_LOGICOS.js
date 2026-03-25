// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let readline = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:

    // let a = true && true
    // let b = true && false
    // let c = false && true
    // let d = false && false

    // console.log(`true && true: ${a}`)
    // console.log(`true && false: ${b}`)
    // console.log(`false && true: ${c}`)
    // console.log(`false && false: ${d}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:

//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:

    // let a = true || true
    // let b = true || false
    // let c = false || true
    // let d = false || false

    // console.log(`true || true: ${a}`)
    // console.log(`true || false: ${b}`)
    // console.log(`false || true: ${c}`)
    // console.log(`false || false: ${d}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:

    // let sistema_ativo = true
    // let modo_manutencao = !(sistema_ativo)

    // let lugar_vago = false
    // let lugar_ocupado = !(lugar_vago)

    // console.log(`
    //     sitema ativo = ${sistema_ativo}
    //     modo_manutencao = ${modo_manutencao}
    //     lugar_vago = ${lugar_vago}
    //     lugar_ocupado = ${lugar_ocupado}
    //     `)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:

    // let user ={
    //     peso: readline.questionFloat("digite seu peso: "),
    //     idade:readline.questionFloat("digite sua idade: "),
    //     imc: (user.peso) / (user.altura) * 2
    //   }

    //     let IMC_baixo = (user.imc) < 18.5
    //     let imc_normal = 24.9 >= (user.imc) >= 18.5
    //     let imc_alto = (user.imc) >= 25 && (user.imc) <= 29.9
    
    //     console.log(`imc baixo:${IMC_baixo}`)
    //     console.log(`imc normal:${imc_normal}`)
    //     console.log(`imc alto:${imc_alto}`)
    
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:

    // let nota_final = 4.8

    // let precisa_de_recuperacao = (notaFinal >= 4 && notaFinal < 6)

    // let reprovado = (nota_final < 4)

    // let precisa_de_ajuda = precisa_de_recuperacao || reprovado

    // console.log(`nota_final: ${nota_final}`)
    // console.log(`precisa_de_recuperacao ${precisa_de_recuperacao}`)
    // console.log(`reprovado: ${reprovado}`)
    // console.log(`precisa_de_ajuda: ${precisa_de_ajuda}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:

    //  let temperatura = 38.2
    
    //  let diagnostico = (temperatura >= 37.6 ? "febre detectada" : "temperatura normal")

    // console.log(`diagnostico: ${diagnostico}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:

    // let velocidade = 110
    // let limite_velocidade = 100

    // let status_multa = (velocidade > limite_velocidade ? "multa aplicada" : "velocidade regular")

    // console.log(`velocidade detectada : ${velocidade} , status multa: ${status_multa}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:

    // let estudante = readline.keyInYN("voce e bolsista? ")

    // let valor_curso = readline.keyInYN("voce e paga mais de R$1000,00 reais pelo curso? ")

    // let mensagem = (valor_curso && estudante ? "desconto aplicado!" : "desconto nao aplicado.")

    // console.log(`mensagem: ${mensagem}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:

    // let idade = readline.questionInt("digite sua idade: ")
    // let ingresso = readline.keyInYN("possui ingresso? ")
    // let associado = readline.keyInYN("é associado ao clube? ")

    // let user = {
    //     idade: idade,
    //     ingresso: ingresso,
    //     associado: associado
    // }

    // let verificações = {
    //     entrar_normal: (user.idade) >= 18 && ((user.ingresso) || (user.associado)),
    //     entrar_socio: (user.ingresso) && (user.associado),
    //     precisa_acompanhante: (user.idade) < 18,
    //     entrada_negada: (user.ingresso === false) || (user.associado === false)
    // }

    // console.log(`${(verificações.entrar_normal || verificações.entrar_socio ? 'entrada permitida' : 'entrada negada')}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:

    // let nome_produto = readline.question("nome do pruduto: ")
    // let estoque = readline.questionFloat("quantas unidades em estoque? ")
    // let sistema;

    // // testando do e while

    // do{
    //     sistema = readline.question("o produto esta ativo no sistema? ").toLowerCase()
    // } while ( sistema !== 'sim' && sistema !== 'nao' && sistema !== 'não')

    // let produto = {
    //     nome: nome_produto,
    //     em_estoque: estoque,
    //     disponivel_sistema: sistema
    // }

    // let em_estoque = estoque > 0 
    // let disponivel_sistema = sistema === 'sim'
    // let indisponivel_sistema = (!disponivel_sistema) || (!em_estoque)

    // if(!indisponivel_sistema){
    //     console.log("produto em estoque e ativo no sistema")
    // } else {
    //     console.log("produto indisponivel")
    // }

    // console.log(`nome do produto:${produto.nome}, quantidade em estoque:${produto.em_estoque}, situacao de disponiblidade no sistema:${disponivel_sistema ? 'ativo' : 'inativo'}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:

    // let adm = readline.keyInYN("voce e adm? ")
    // let logado = readline.keyInYN("voce esta logado? ")
    // let conta_ativa = readline.keyInYN("sua conta esta ativa? ")

    // let user = {
    //     admin: adm,
    //     login: logado,
    //     situacao_conta: conta_ativa
    // }

    // let acesso_usuario = user.situacao_conta && user.login
    // let acesso_admin = acesso_usuario && user.admin
    // let acesso_negado = (!user.conta_ativa) && (!user.login)

    // console.log(`acesso usuario: ${acesso_usuario ? 'permitido' : 'negado'}`)
    // console.log(`acesso admnistrador: ${acesso_admin ? 'permitido' : 'negado'}`)
    // console.log(`${acesso_negado ? 'SOME DAQUI' : 'acesso concedido'}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:

    // let credenciais = {
    // usuario:"bruno",
    // senha:09122009
    // }

    // let usuario = readline.question("digite seu usuario: ")
    // let senha = readline.questionInt("digite sua senha: ")

    // if (credenciais.usuario === usuario && credenciais.senha === senha){
    //     console.log("Login realizado com sucesso!")
    // } else {
    //     console.log("Usuário ou senha incorretos.")
    // }

console.log("_______________________________");