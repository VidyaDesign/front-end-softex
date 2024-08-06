"use strict";
/*

interface Carro {
    ano: number;
    marca: string;
  }
  
  let carros: Carro[] = [];
  
  
  carros.push({ ano: 2024, marca: 'BYD' });
  carros.push({ ano: 2020, marca: 'Tesla' });
  carros.push({ ano: 2023, marca: 'CAOA Chery' });
  
  for (let carro of carros) {
    console.log(carro.marca);
  }

  //Mostrar o mais antigo


  for (let carro of carros) {
    let result = carros;
    console.log(result);
  }

let index:number = 0

  
  for (index = 5 ; index < 10; index++){
    
    console.log(`Teste ${index}`)
    
  }

  console.log(`Continue.....`)



  for (let i = 30; i > 0; i--){
    console.log(`A bomba vai explodir em ${i} segundos`)
      
  }
  console.log(`Boommmm!!!`)

  
 for (let index = 0; index < 10; index++) {
    if(index == 5){
        break;
    }

    console.log(index)
 }


 for (let index = 0; index < 10; index++) {
    if(index == 5){
        continue;
    }

    console.log(index)
 }


 const frutas = ['Banana', 'Maça', 'Uva', 'Pêra', 'Mamão']

 for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    
    console.log(element)
 }
 

 const frutas = ['Banana', 'Maça', 'Uva', 'Pêra', 'Mamão']

 for(let fruta of frutas) { console.log(fruta)}



document.write(`Contagem progressiva <br>`)
for(let i = 0; i <= 10; i++){
  document.write(`${i}<br>`)
}

document.write(`Contagem regressiva <br>`)
for(let i =10; i >= 0; i--){
  document.write(`${i}<br>`)
}

document.write(`Números pares <br>`)
for (let cont = 1; cont <= 50; cont++){
  if(cont % 2 == 0){
      document.write(`${cont} <br>`)
  }
}


let soma = 0;

for (let i = 0; i <= 100; i++){

 soma += i;

}

document.write(`<br> A soma dos números inteiros de 1 à 100 é igual a: ${soma}<br>`);

let fatorial = 5;
let resultado = fatorial;
for (let i = 1; i < fatorial; i++) {
    resultado *= i;
}

document.write(`<br> O valor do produto  de 1 à 5 é igual a: ${resultado}<br>`);



let numero = 7

for (let i = 0; i <= 10; i++) {
  
  document.write(`<br> A tabuada de 7 é igual a: ${ + i}<br>`)
}


let num = 7

for (let i = 0; i <= 10; i++){
  console.log(num * i)
}

for (let i = 0; i <= 10; i++){
  console.log(num + i)
}

for (let i = 0; i <= 10; i++){
  console.log(num - i)
}

for (let i = 0; i <= 10; i++){
  console.log(num / i)
}


for (let i = 0; i < 50; i++){
  if (i % 2 == 1 && i % 3 == 0) {
    console.log(i);
  }
}

let numero:number [] = [9, 284, 3, 7, 81, 1, 34, 13];
console.log(numero.reverse());


let aluno:string
let media: number
let n1: number
let n2: number
let n3: number
let n4: number
let n5: number

aluno = String(prompt("Digite o nome do aluno(a): "));
n1 = Number(prompt ("Informe a primeira nota: "))
n2= Number(prompt ("Informe a segunda nota: "))
n3 = Number(prompt("Informe a terceira nota: "))
n4 = Number(prompt("Informe a terceira nota: "))
n5 = Number(prompt("Informe a terceira nota: "))

let notas:number [] = [n1, n2, n3, n4, n5]
media = (n1 + n2 + n3 + n4 + n5) / 5;

console.log(notas)

if ( media >= 7 ) {
document.write(`${aluno} você está aprovado! Média =  ${media} `);

} else if ( media >= 5 ) {
document.write(`${aluno} você está em recuperção! Média =  ${media}`);

} else {

document.write(`${aluno} você está reprovado(a)! Média =  ${media}`);
}


for(let i = 0; i <= 50; i++){
  if(i % 2 == 0){
    document.write(`${i} <br>`)
  }
}

for(let i = 0; i <= 50; i++){

  if(i % 2 == 1){
    document.write(`${i} <br>`)
  }
}

const numeros = '1235436234';
const arrayNumeros = numeros.split('');

for(const value of arrayNumeros){
  console.log(`${value}`)
}
let soma = 0

for(const value of arrayNumeros){

  soma += Number(value)

}

console.log(`Soma = ${soma}`)


//While

let num = 0

while(num < 10){
  console.log(num)
  num ++
}


let num = 1
do{
  console.log(`Resultado: ${num}`)
  num++;
 }while(num < 6);

 */
/*

let value
let arrayNumeros
let soma:number = 0


do{

   value = String(prompt('Digite um número'))
   arrayNumeros = value.split('');
   console.log(arrayNumeros)
   soma += Number(value)
   console.log(value)

}while(parseInt(value) < 50)



let numero =  -1

do{

  numero = Number(prompt('Digite um número'))

}while(numero != 0)


let i = 1;

while (i == 1) {
  const num1 = Number(prompt("Digite o primeiro número: "));
  const num2 = Number(prompt("Digite o segundo número: "));

  const soma = num1 + num2;
  console.log(`A soma de ${num1} e ${num2} é: ${soma}`);

 break
}


let x = Number(prompt("Digite o primeiro número: "));
document.write(`Divisores de ${x} <hr>`)
for (let cont = 1; cont <= x; cont++){

  if (x % cont == 0) {
    document.write(`${cont} <br> `)
  }

}


let i = 1;

while (i == 1) {
  const num1 = Number(prompt("Digite a primeira altura: "));
  const num2 = Number(prompt("Digite a segunda altura: "));
  const num3 = Number(prompt("Digite a yerceira altura: "));
  

  const media = (num1 + num2 + num3) / 3;
  document.write(`Alturas:<br> ${num1} - ${num2} - ${num3} <hr>`);
  document.write(`Média: ${media.toFixed(2)}`);

  break;
}
*/
let parada;
let numerais = [];
for (let i = 1; i < 3; i++) {
    let numeros = Number(prompt(`Digite números, para parar aperte o 0`));
    numerais.push(numeros);
    i++;
}
const maiorValor = Math.max(...numerais);
const menorValor = Math.min(...numerais);
console.log(`O maior valor digitado foi: ${maiorValor}`);
console.log(`O menor valor digitado foi: ${menorValor}`);
