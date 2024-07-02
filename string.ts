//String
//___________________________________________________________________________________________________________________________________________
//1. Crie uma variável chamada "nome" e atribua a ela uma string com seu nome. Em seguida, exiba o conteúdo da variável "nome" no terminal.

let nome: string = 'Mahavidya'
console.log(nome)

//2. Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba o comprimento da string armazenada na 
//variável "frase".

let frase:string = 'Olá, seja bem vindo ao curso.'
console.log('Frase: ' + frase + ' - Tamanho: ' + frase.length)

//3. Crie uma variável chamada "palavra" e atribua a ela uma palavra qualquer. Em seguida, exiba a primeira letra da palavra armazenada 
//na variável "palavra".

let palavra:string = 'Typescript'
console.log('Palavra: ' + palavra +' - Primeiro caractere: ' + palavra.charAt(0))

//4. Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba a frase em letras maiusculas.

let frase2:string = 'Webdesinger profissional'
console.log(frase2.toUpperCase())

//5. Crie uma variável chamada "endereço" e atribua a ela um valor de sua escolha. Em seguida, sobrescreva o valor da variável para um 
//outro endereço e verifique no terminal o valor atual da variável.

let endereco:string = 'Rua da saudade, 123'
endereco = 'Rua da Felicidade, 321'
console.log(endereco)