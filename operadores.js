//Operadores Lógicos
//1. Utilizando a função "console.log", verifique se dois números são iguais utilizando o operador de
//igualdade ("==").
var a = 10;
var b = 20;
var c = "";
var f = false;
console.log(a == b ? "O valor de [a] é igual a [b]" : "O valor de [a] é difente de [b]");
//2. Utilizando a função "console.log", verifique se dois números são diferentes utilizando o operador
//de diferença ("!=").
console.log(!(a = b) ? "Verdadeiro" : "Falso");
//3. Utilizando a função "console.log", verifique se um número é maior que outro utilizando o operador
//de maior que (">").
console.log(a > b ? "Verdadeiro" : "Falso");
//4. Utilizando a função "console.log", verifique se um número é menor que outro utilizando o operador
//de menor que ("<").
console.log(a < b ? "Verdadeiro" : "Falso");
//5. Utilizando a função "console.log", verifique se um número é maior ou igual a outro utilizando o
//operador de maior ou igual a (">=").
console.log(a >= b
    ? "O valor de [a] é  maior ou igual a [b]"
    : "O valor de [a] é menor do que [b]");
//6. Utilizando a função "console.log", verifique se um número é menor ou igual a outro utilizando o
//operador de menor ou igual a ("<=").
console.log(a <= b
    ? "O valor de [a] é  menor ou igual a [b]"
    : "O valor de [a] é maior do que [b]");
//7. Utilizando a função "console.log", verifique se duas condições são verdadeiras utilizando o
//operador lógico AND ("&&").
console.log(a <= b && b != a
    ? "Todas as condições estão dentro do intervalo "
    : "Todas as condições não estão dentro do intervalo");
//8. Utilizando a função "console.log", verifique se pelo menos uma das condições é verdadeira
//utilizando o operador lógico OR ("||").
console.log(a <= b || b <= a
    ? "Uma das condições estão dentro do intervalo "
    : "Uma das condições não estão dentro do intervalo");
//9. Utilizando a função "console.log", negue uma condição utilizando o operador lógico NOT ("!").
console.log(!(f = true) ? "A função booleana é verdadeira" : "A função buleana é falsa");
//10. Utilizando a função "console.log", verifique se um número está dentro de um determinado
//intervalo, utilizando os operadores lógicos AND e os operadores de comparação (">=" e "<=").
console.log(a <= 10 && b <= 20
    ? "Todas as condições estão dentro do intervalo "
    : "Todas as condições não estão dentro do intervalo");
//11. Utilizando a função "console.log", verifique se um número está fora de um determinado intervalo,
//utilizando os operadores lógicos OR e os operadores de comparação ("<" e ">").
console.log(a <= 10 || b <= 20
    ? "Uma das condições estão dentro do intervalo "
    : "Uma das condições não estão dentro do intervalo");
//12. Utilizando a função "console.log", verifique se um número é positivo, utilizando o operador de
//maior que (">") e o operador de igualdade ("==") para verificar se o número é maior que zero.
console.log(a > 0 ? "O valor de [a] é  maior que  0" : "O valor de [a] é menor 0");
//13. Utilizando a função "console.log", verifique se uma string é vazia, utilizando o operador de igualdade
//("==") e o operador de tamanho ("length") para verificar se o tamanho da string é igual a zero.
console.log(c == "" ? "A função [c] está vazia" : "A função [c] não está vazia", " - Valor: " + c.length);
//14. Utilizando a função "console.log", verifique se uma variável é do tipo booleano, utilizando o operador
//"typeof" e o operador de igualdade ("==") para verificar se o tipo de dado é igual a "boolean".
console.log(f == true || false
    ? "A variável é to tipo booleana"
    : "A variável não é do tipo booleana");
