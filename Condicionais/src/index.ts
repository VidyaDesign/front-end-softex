//Condicionais
/*
document.write(`Condicionais`)

let n1:string = String(prompt('Digite um número inteiro'))


if(parseInt(n1) > 0){
      console.log(`O valor ${n1} é positivo`)
}else if(parseInt(n1) === 0){
  console.log(`${n1} = 0 | valor negativo`)
}else{
  console.log(`O valor ${n1} é negativo e está à abaixo de zero`)
}
*/

/*
let idade = Number(prompt('Digite a sua idade'))
document.write(idade >= 18? 'Você é maior de idade': 'Você é menor de idade')
*/

/*
let x = Number(prompt('Digite o primeiro número inteiro'))
let y = Number(prompt('Digite o segundo número inteiro'))
if(x > y) {
    console.log(`O valor ${x} é maior do que ${y}`)
}else if(x === y){
    console.log(`O valor ${x} é igual a ${y}`)
}else{
    console.log(`O valor ${y} é maior que ${x}`)
}
*/

/*
let n1 = Number(prompt('Digite um número inteiro'))
let result:number = n1 % 2 
if(result == 0){
  document.write(`${result} é um número par`)
}else{
  document.write(`${result} é um número ímpar`)
}
*/
/*
let n1:string = String(prompt('Digite a primeira nota'))
let n2:string = String(prompt('Digite a segunda nota'))
let n3:string = String(prompt('Digite a terceira nota'))
let media: number = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3

if(media == 10 ){
  document.write(`Aprovado com louvor`)
}else if(media >= 7){
  document.write(`Aprovado`)
}else{
  document.write(`Reprovado`)
}
*/
/*
 let nome1 = String(prompt('Digite o primeiro nome'))
 let nome2 = String(prompt('Digite o segundo nome'))

 if(nome1.length > nome2.length){
  console.log(`${nome1} é maior que ${nome2} porque contém ${nome1.length} caracteres`)
 }else{
  console.log(`${nome2} é maior que ${nome1} porque contém ${nome2.length} caracteres`)
 }
*/
/*
function check() {
  let letra = String(prompt("Digite uma letra"));

  letra = letra.toLowerCase();

  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    alert(`O caractere ${letra} é uma vogal`);
  } else {
    alert(`O caractere ${letra} é uma consoante`);
  }
}
check()


let n1:number
let n2:number
let n3:number
let numeros = [
   n1 = Number(prompt('Digite o primeiro valor')),
   n2 = Number(prompt('Digite o segundo valor')),
   n3 = Number(prompt('Digite o terceiro valor'))
]
document.write(`${numeros.sort()}`)



let peso:string = String(prompt('Digite o seu peso')) 
let altura:string = String(prompt('Digite o sua altura'))
let imc:number 

imc = (parseFloat(peso)) / (parseFloat(altura) * 2 )

if(imc < 16){
  document.write(`Magreza Extrema`)
}else if(imc == 16 || imc < 17){
  document.write(`Magreza Moderada`)
}else if(imc == 17 || imc < 19){
  document.write(`Magreza Leve`)
}else if(imc == 19 || imc < 25){
  document.write(`Peso Ideal`)
}else if(imc == 25 || imc < 30){
  document.write(`Sobrepeso`)
}else if(imc == 30 || imc < 35){
  document.write(`Obesidade grau 1`)
}else{
  document.write(`Obesidade Morbida`)
}

let mes = Number(prompt("Selecione o mês do seu aniversário de 1 à 12 "));
switch (mes) {
  case 1:
    document.write(`Você nasceu no mês de janeiro`);
    break;
  case 2:
    document.write(`Você nasceu no mês de fevereiro`);
    break;
  case 3:
    document.write(`Você nasceu no mês de março`);
    break;
  case 4:
    document.write(`Você nasceu no mês de abril`);
    break;
  case 5:
    document.write(`Você nasceu no mês de maio`);
    break;
  case 6:
    document.write(`Você nasceu no mês de junho`);
    break;
  case 7:
    document.write(`Você nasceu no mês de julho`);
    break;
  case 8:
    document.write(`Você nasceu no mês de agosto`);
    break;
  case 9:
    document.write(`Você nasceu no mês de setembro`);
    break;
  case 10:
    document.write(`Você nasceu no mês de outubro`);
    break;
  case 11:
    document.write(`Você nasceu no mês de novembro`);
    break; 
  default:
    document.write(`Você nasceu no mês de dezembro`);
    break;
}

let salario = Number(prompt('Digite o seu salário'))
let aumento:number = 0.15 * salario
let aumento2:number = 0.10 * salario
let novoSalario:number = salario + aumento
let novoSalario2:number = salario + aumento2


if(salario <= 1.500 ){  
  document.write(`Salário: ${salario} + reajuste de 15% | Novo salario ${novoSalario}`)
}else{
  document.write(`Salário: ${salario} + reajuste de 10% | Novo salario ${novoSalario2}`)
} 

let numero: number = Number(prompt("Digite um numero inteiro"));

function divisiveisPor3e5() {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`${numero} é divisível por 3 e 5`);
  } else {
    console.log(`${numero} não é divisível por 3 e 5`);
  }
}
divisiveisPor3e5();


let dia = prompt('Digite o dia da semana')
dia?.toLowerCase()

if(dia == 'segunda' || dia == 'quarta' || dia == 'quinta' || dia == 'sexta'){
  document.write(`Dia útil`)
}else if(dia == 'terça' || dia == 'terca'){
  document.write(`Dia útil`)
}else if(dia == 'sábado' || dia == 'sabado' || 'domingo'){
  document.write(`Final de semana`)
}else{
  document.write(`Digite um dia de semana válido`)
}

let number = Number(prompt('Numa escala de 1 à 5 digite um valor'))
switch(number){
  case 1:
    document.write(`Muito insuficiente`)
    break
    case 2:
    document.write(`Insuficiente`)
    break
    case 3:
    document.write(`Regular`)
    break
    case 4:
    document.write(`Bom`)
    break
    case 5:
    document.write(`Excelente!`)
    break
}

let number = Number(prompt('Escolha o dia da semana digitando um valor de 1 à 7, sendo o domingo o equivalente a 1'))
switch(number){
  case 1:
    document.write(`Domingo`)
    break
    case 2:
    document.write(`Segunda`)
    break
    case 3:
    document.write(`Terça`)
    break
    case 4:
    document.write(`Quarta`)
    break
    case 5:
    document.write(`Quinta`)
    break
    case 6:
      document.write(`Sexta`)
      break
    case 7:
      document.write(`Sábado`)
    break
}   


let idade = Number(
  prompt(
    "Digite a sua idade, para menores ou bebês de  1 ano de vida, digite 1"
  )
);
if (idade <= 1) {
  document.write(`Vocè é um bêbe`);
} else if (idade > 1 && idade <= 12) {
  document.write(`Vocè é uma criança`);
} else if (idade >= 13 && idade <= 18) {
  document.write(`Vocè é um adolescente`);
} else if (idade >= 19 && idade < 65) {
  document.write(`Vocè é adulto(a)`);
} else {
  document.write(`Vocè é um idoso(a)`);
}

let estadoCivil = Number(
  prompt(
    "Digite: \n 1 para Solteiro \n 2 para Casado \n 3 para Divorciado \n 4 para Viúvo"
  )
);

switch (estadoCivil) {
  case 1:
    document.write(`Você está solteiro(a)`);
    break;
  case 2:
    document.write(`Você está casado(a)`);
    break;
  case 3:
    document.write(`Você está divorciado(a)`);
    break;
  case 4:
    document.write(`Você está viúvo(a)`);
    break;
}

let operacao = Number(
  prompt(
    "Digite: \n 1 para Somar \n 2 para Subtrair \n 3 para Dividir \n 4 para Multiplicar"
  )
);

let num1: number;
let num2: number;
let soma: number;
let sub: number;
let div: number;
let mult: number;

switch (operacao) {
  case 1:
    num1 = Number(prompt("Digite o primeiro valor"));
    num2 = Number(prompt("Digite o segundo valor"));
    soma = num1 + num2;

    document.write(`${num1} mais ${num2} é igual a ${soma}`);
    break;
  case 2:
    num1 = Number(prompt("Digite o primeiro valor"));
    num2 = Number(prompt("Digite o segundo valor"));
    sub = num1 - num2;

    document.write(`${num1} menos ${num2} é igual a ${sub}`);
    break;
  case 3:
    num1 = Number(prompt("Digite o primeiro valor"));
    num2 = Number(prompt("Digite o segundo valor"));
    div = num1 / num2;

    document.write(`${num1} dividido por: ${num2} é igual a ${div}`);
    break;
  case 4:
    num1 = Number(prompt("Digite o primeiro valor"));
    num2 = Number(prompt("Digite o segundo valor"));
    mult = num1 * num2;

    document.write(`${num1} multiplicado por: ${num2} é igual a ${mult}`);
    break;
}
*/

/*Switsh Bônus
type TipoPagamento = 1 | 2 | 3 | number;

let tipoPagamento: TipoPagamento | undefined = Number(prompt('Escolha a forma de pagamento: [1] = crédito [2]= pix [3] = boleto'))
 
switch (tipoPagamento) {
  case 1:
    console.log(`O pagamento está sendo processado no ${tipoPagamento}`);
    break;
  case 2:
    console.log(`O pagamento está sendo processado no ${tipoPagamento}`);
    break;
    case 3:
    console.log(`O pagamento está sendo processado no ${tipoPagamento}`);
    break;

  default:
    console.log(`Digite um valor válido`);
    break;
}

const movies = [
  {id: 1, movieName: 'Dejavu'},
  {id: 2, movieName: 'Back to the Future'},
  {id: 3, movieName: 'The Matrix'},
]

console.log(movies.find(movie => movie.movieName == 'The Matrix' ))
*/

//Try Catch
let num:string = String(prompt('Digite um número decimal'))
let result:number

try{  
 
 result = parseFloat(num)
 Math.ceil(result)
 //throw(`${result}`)
}catch (ex){
  console.log(`Erro!`)  
}finally{
  console.log(`Valor decimal válido!`)  
}

