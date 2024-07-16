//Aula 03 - Entrada e manipulação de dados

//1. Implemente o código do slide de número 5.
/*
let frase = prompt('Digite a primeira frase');
console.log(typeof(frase), frase)
*/

//2. Implemente o código do slide de número 13.
/*
let string = '123';
console.log(typeof Number (string))
*/

//3. Implemente o código do slide de número 16.
/*
let num1:string = String(prompt('Digite o primeiro número'))
let num2:string = String (prompt('Digite o segundo número'))

let soma:number = parseInt(num1) + parseInt(num2)
console.log(`${soma}`)
*/

//4. Implemente o código do slide de número 23.
/*
let string1:string = 'Estudar'
let string2:string = ' é bom!'

document.write(`<h3> ${string1} ${string2}`)
*/

//5. Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
/*
let user = prompt('Digite seu nome')
console.log('Olá, ' + user + ' seja bem vido(a)')
*/

/*
//6. Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número inteiro.
let idade:string = String(prompt('Digite sua idade entre "" '));
console.log(parseInt(idade))
*/

/*
//7. Receba um número inteiro do usuário e converta-o em um número decimal (float).
let x:string = String(prompt('Digite um valor inteiro'))
console.log(parseFloat(x).toFixed(2))

*/

//8. Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
/*
let a = Number(prompt('Digite o primeiro valor:'));
let b = Number(prompt ('Digite o segundo valor:'))
let soma = a + b
console.log(soma)
*/

/*
//9. Receba um número decimal do usuário e calcule o seu quadrado.
let decimal = Number(prompt('Digite um valor decimal'))
decimal = decimal *2
console.log(decimal)
*/

//10. Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
/*
let anoNascimento = Number(prompt('Didite o seu ano de nascimento:'));
let anoAtual = Number(prompt('Digite o ano atual'));
let idade = anoAtual - anoNascimento;
console.log('Esta é a sua idade: ' + idade)
*/

//11. Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
//concatene-os em uma única string e exiba o nome completo.
/*
let nome = prompt('Digite o seu nome:');
let sobreNome = prompt('Digite o seu sobre-nome:')
console.log(nome + ' ' + sobreNome)
*/

//12. Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados.
let elementos = [];
let qtd = Number(prompt('Digite a quantidade de elementos que deseja adicionar'))

for(let i = 0; i < qtd; i++){
    elementos[i] = prompt('Digite o elemento:')

}

document.write(`Elementos do Array: ${elementos} - quantidade: ${qtd} `)
console.log(elementos, typeof elementos, elementos.length)


//13. Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual animal foi digitado.
/*
let animal = prompt ('Você prefere gato ou cachorro? ')
animal ? 'Gosto de gatos' : 'Gosto de cachorro'
document.write('<p>' + animal)*/

//15. Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
/*
let palavra = prompt('Digite uma lavra');
let tam = palavra?.length
document.write( palavra + '  Numero de caractere: ' + tam)*/

//16. Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
/*
let x = Number(prompt('Digite um numero inteiro'))
let par = (x % 2);
if(par == 0){
    console.log('O numero ' + x + ' é par')
}else{
    console.log('O numero ' + x + ' é impar') 
}
*/

//17. Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
/*
let x = Number(prompt('Digite um numero positivo ou negativo'))

if(x > 0){
    console.log('O numero ' + x + ' é positivo')
}else{
    console.log('O numero ' + x + ' é negativo') 
}
*/

//18. Peça ao usuário que insira dois números e exiba o maior deles.
/*
let a = Number(prompt('Digite o primeiro valor'))
let b = Number(prompt('Digite o segundo valor'))
console.log (a > b? ( a + ' é maior do que ' + b) : ( a + ' é menor do que ' + b));
*/

/*
//19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
//massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.
let peso = Number(prompt('Digite o seu peso'))
let altura = Number(prompt('Digite a sua altura'))
let imc:number = peso / (altura * 2)

console.log(`IMC: ${imc}`)
*/
/*
//20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
let nome:string = String(prompt('Digite seu nome'))
let valor = nome.length
if(valor > 5){
    console.log(`O nome ${nome} contém mais de cinco caractere`)
}else{
    console.log(`O nome ${nome} não contém mais de cinco caractere`)
}
*/

/*
//21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:
//"Você é casado(a)", "Você é solteiro(a)", etc.)
let estado = Number(prompt('Digite 1 para casado ou 0 para solteiro'))
if(estado === 1){
    console.log(`Você é casado(a)`)
}else if(estado === 0){
    console.log(`Você é solteiro(a)`) 
}else{
    console.log(`Digite um valor válido`) 
}
*/

/*
//22. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e exiba o resultado.
let base:string = String( prompt("Digite o valor da base do triângulo: "))
let altura:string =String(prompt("Digite o valor da altura do triângulo: "))
let area:number = Number (parseInt(base) * parseInt(altura)) / 2

console.log(area)
*/
/*
//23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de sua escolha).
let cidade:string = String(prompt('Digite o nome de sua cidade'))
let result = cidade.charAt(0)
if(cidade.startsWith('S') || cidade.startsWith('s') ){
    document.write(`A cidade ${cidade} começa com a letra "S"`)
}else{
    document.write(`A cidade ${cidade} não começa com a letra "S"`)
}
*/

/*24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
const x: number = parseFloat(prompt("Digite o primeiro número decimal"));
const y: number = parseFloat(prompt("Digite o segundo número decimal"));
const c = x + y;
const resto = c % 2;

document.write(`<h3> ${resto}`);
console.log(resto);
*/

/*25. Solicite ao usuário um número decimal e converta-o em um número inteiro.
const x: number = parseInt(prompt("Digite um número decimal"));

document.write(`<h3> ${x}`);
console.log(x);
*/

/*26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o novamente para uma string antes de exibi-lo.
let x:string = String (prompt('Digite um número inteiro'))
let y:string = '10'

let soma:string = String (parseInt(x) + parseInt(y))

console.log(`${soma}`)
*/
/*
//27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente,
//convertendo-os em números inteiros.
let data:string = String(prompt('Digite a data de hoje no formato: dd/mm/aaaa'))
let dia:string = data.substring(0, 2) 
let mes:string = data.substring(3, 5)  
let ano:string = data.substring(6, 10)

console.log(`Data: ${parseInt(dia)}`)
console.log(`Data: ${parseInt(mes)}`)
console.log(`Data: ${parseInt(ano)}`)

*/

/*28. Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma
//mensagem completa, como "Você mora em [cidade], [estado].".
let cidade:string = String(prompt('Digite a cidade em que reside'))
let estado:string = String(prompt('Digite o Estado'))
let mensagem:string = 'Você mora em ' + cidade + ' no estado de ' + estado

document.write(`${mensagem}`)
*/


/*29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de
//boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".
let ano:number = Number(prompt('Digite o ano do seu nascimento'))
let mensagem:string = 'Bem-vindo ao nosso programa, nascido em '

document.write(`<p> ${mensagem} ${ano}`)
*/

/*30. Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única
string, separando-os com um espaço.
let nome = prompt('Digite seu nome')
let idade = parseInt(prompt('Digite sua idade'))

document.write(`<p> Nome: ${nome} - Idade: ${idade}`)
console.log(`Nome: ${nome} - Idade: ${idade}`)
*/

//31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto,
//adicionando o símbolo de moeda da sua escolha.
/*
//32. Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.
let x:string = String(prompt('Digite um um número inteiro'))
console.log(`O dobro de ${x} é igual a ${parseInt(x) * 2}`)
*/

/*
//33. Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de
//agradecimento personalizada.
let email:string = String(prompt('Digite seu email'))
document.write(`Seja bemvindo ao nosso sistema, ${email}`)
*/

/*
//34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente
//(divisão inteira) entre eles.
let a:string = String(prompt('Digite o primeiro número inteiro'))
let b:string = String(prompt('Digite o segundo número inteiro'))
let soma:number = parseInt(a) + parseInt(b)
let diferenca:number = parseInt(a) - parseInt(b)
let quociente:number = parseInt(a) / parseInt(b)

console.log(`Soma de ${a} + ${b} é igual a ${soma}`)
console.log(`Diferença de ${a} - ${b} é igual a ${diferenca}`)
console.log(`O quociente de ${a} / ${b} é igual a ${quociente}`)
*/

/*
//35. Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.
let base:string = String( prompt("Digite o valor da base do triângulo: "))
let altura:string =String(prompt("Digite o valor da altura do triângulo: "))
let area:number = Number (parseInt(base) * parseInt(altura)) / 2

document.write(`A área do triângulo é: ${area}`)

*/

/*
//36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
function calculateCircumference(radius:number) {
    return 2 * Math.PI * radius;
  }
  
  console.log(Math.PI); 
  console.log(calculateCircumference(26));
*/
/* 
//37. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o perímetro do retângulo.
let base:string = String(prompt('Digite a base do ratângulo'))
let altura:string = String(prompt('Digite a altura do ratângulo'))
let perimetro:number = parseFloat(base) * parseFloat(altura) 

console.log(`O perímentro do retângulo é de ${ perimetro}`)
*/
/*
//38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média aritmética desses números.
let a:string = String(prompt('Digite o primeiro valor decimal'))
let b:string = String(prompt('Digite o segundo valor decimal'))
let c:string = String(prompt('Digite o terceiro valor decimal'))
let media:number

media = (parseFloat(a) + parseFloat(b) + parseFloat(c)) /3
document.write(`A média do aluno é: ${media.toFixed(2)}`)
*/
/*
//39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já
//viveu (considerando um ano com 365 dias).
let idade:string = String(prompt('Digite a sua idade'))
let mes:number = 12
let dias:number = 365 

mes = parseInt(idade) * mes
dias = parseInt(idade) * dias

document.write(`<p> Meus parabéns! Você tem ${idade} anos que somam ${mes} meses e ${dias} dias de vida`)

*/
/*
//40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor para dólares e exiba o resultado.
let real:string = String(prompt('Digite um valor em Real $:'))
let dolar:string = String(prompt('Digite o valor da cotação do Dólar $:')) 
let calc:number = parseFloat(real) * parseFloat(dolar)

document.write(`<p> O valor de R$ ${real} é igual à ${calc} Dólares`)
*/

/*
//41. Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.
let x = Number(prompt('Digite um valor decimal'))
console.log(Math.round(x)) 
*/

/*
//42. Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) * n3.
let n1 = Number(prompt('Digite o primeiro número inteiro'))
let n2 = Number(prompt('Digite o segundo número inteiro'))
let n3 = Number(prompt('Digite o valor que irá multiplicar a soma de n1 + n2'))
let result:number
result = (n1 +n2) * n3
console.log(result)
*/
/*
//43. Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando a fórmula: 
//Fahrenheit = (Celsius * 9/5) + 32.
let celsius = String(prompt('Digite a temperatura em graus celsius'))
let fahrenheit:number

fahrenheit = (parseFloat(celsius) * 9/5) + 32
document.write(`<p> Celsius: ${celsius} | Fahrenheit: ${fahrenheit}`)
*/



//___________________FUNCTION____________________//

/*
interface Cart{
    id:number,
    title:string,tsc

    variantId?:number
}

function addToCart(item:Cart){
    document.write(`<p> Adding ${item.title} to cart. <br>`)
    console.log(`Adding "${item.title}" to cart.`)
}

addToCart({id: 1, title:'shoes'});

//Class
interface Person{
    name:string,
    age:number
}

class Person implements Person{
    constructor(public name: string, public age: number){
        
    }
}

const user1 = new Person('Mahavidya', 49)
console.log(`${user1.name} is ${user1.age} years old.`)

//Class
class MC{
    greet(event:string = 'party'): string{
        return `Welcome to the ${event}`;
    }
}

const mc = new MC();
document.write(mc.greet('show'));

//Class
class Employee{
    constructor(public title: string, public salary: number){}
}
const employee = new Employee('Engineer', 100000)
document.write(`<p> The new employee's title is ${employee.title} and they earn ${employee.salary}`)

//RadOnly
interface UserSchema{
    id: number
    name: string
}
class User implements UserSchema{
    constructor(public name:string, readonly id:number){}//ReadOnly
}
const user = new User('Nino', 1)
console.log(`Nome: ${user.name} id: ${user.id}`)

//user.id = 2
console.log(`id: ${user.id}`)
*/
