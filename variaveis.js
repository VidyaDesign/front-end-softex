//Tipos de variáveis
//1. Declare uma variável chamada "variavelNull" e atribua a ela o valor nulo ("null").
var variavelNull = null;
console.log(variavelNull);
//2. Declare uma variável chamada "variavelUndefined" e não atribua nenhum valor a ela.
var variavelUndefined = undefined;
console.log(variavelUndefined);
//3. Verifique se a variável "variavelNull" é igual a "null".
console.log(variavelNull === null ? "Sim" : "Não");
//4. Verifique se a variável "variavelUndefined" é igual a "undefined".
console.log(variavelUndefined === undefined ? "Sim" : "Não");
//5. Atribua o valor "undefined" a uma propriedade chamada "nome" de um objeto vazio.
var objeto1 = {
    nome: '',
};
objeto1.nome == undefined;
console.log(objeto1.nome);
