//Arrays
//1. Crie um array vazio chamado "numeros".

let numeros: number[] = [];

//2. Adicione os números 1, 2, 3 e 4 ao array "numeros".

numeros = [15, 9, 17, 21, 158, 1];

//3. Acesse o valor do segundo elemento do array "numeros".
console.log(numeros);

//4. Atualize o valor do terceiro elemento do array "numeros" para 10.

numeros[3] = 10;
console.log(numeros);

//5. Remova o último elemento do array "numeros" utilizando a função ".pop".
numeros.pop();
console.log(numeros);

//6. Verifique o comprimento do array "numeros".
let tamanho = numeros.length;
console.log(tamanho);

//7. Crie um novo array chamado "frutas" contendo as strings "maçã", "banana" e "laranprodutosa".

let frutas: string[] = ["maçã", "banana", "laranprodutosa"];

//8. Acesse o valor do primeiro elemento do array frutas.
console.log(frutas[0]);

//9. Adicione a string "uva" ao final do array frutas utilizando a função ".push".

frutas.push("uva");
console.log(frutas);

//10. Crie um obprodutoseto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas.
//Em seguida, crie um array chamado "alunos" e adicione o obprodutoseto "aluno" a esse array.

const Aluno = {
  nome: "Junior",
  idade: 10,
  alunos: ["Aluno"],
};
console.log(Aluno);

//12. Adicione mais três obprodutosetos do tipo "aluno" ao array "alunos".

Aluno.alunos.push("4ª série", "Turno: Manhã", "Faltas: 15");
console.log(Aluno.alunos);

//13. Crie um array chamando "produtos" contendo 10 produtos de supermercado.
//Em seguida, exiba no terminal apenas os produtos que ficaram em posições pares.

let produtos: string[] = [
  "Feijão",
  "Açucar",
  "Biscoito",
  "Macarrão",
  "Manteiga",
  "Queijo",
  "Mortadela",
  "Sal",
  "Detergente",
  "Vassoura",
]
console.log(produtos[1] + '\n' + produtos[3]  + '\n' + produtos[5]  + '\n' + produtos[7]  + '\n' + produtos[9]);
