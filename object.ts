//Object
//1. Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua valores a elas.

const Pessoa: {
  nome: string;
  idade: number;
  endereco: string;
} = {
  nome: "Pedro",
  idade: 48,
  endereco: "Rua da Aurora,161",
};

console.log(Pessoa);

//2. Acesse o valor da propriedade "nome" do objeto "pessoa".

console.log(Pessoa.nome);

//3. Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela.

//console.log(pessoa)

//4. Atualize o valor da propriedade "idade" do objeto pessoa para um novo valor.
Pessoa.idade = 49;
console.log(Pessoa);

//5. Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua valores a elas.
const Animal: {
  nome: string;
  especie: string;
  cor: string;
} = {
  nome: "Nino",
  especie: "Gato",
  cor: "Branco",
};

console.log(Animal);

//6. Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a elas.
let Livro: {
  titulo: string;
  autor: string;
  ano:string
} = {
  titulo: "Macunaíma",
  autor: "Mário de Andrade",
  ano:'1928'
};
console.log(Livro)

//7. Acesse o valor da propriedade "autor" do objeto livro.
console.log(Livro.autor)

//8. Atualize o valor da propriedade "ano" do objeto livro para um novo valor.
Livro.ano = '1928 | 2024'
console.log(Livro)

//9. Exclua a propriedade "titulo" do objeto utilizando o operador "delete".



//delete Livro.titulo;
console.log(Livro)

//10. Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano" e atribua valores a elas. 
//Em seguida, exiba todas as propriedades do objeto no console.

const Carro:{
  marca:string;
  modelo:string;
  ano:number;
}={
  marca:'BYD',
  modelo:'Dolphin Plus',
  ano: 2024
}
console.log(Carro)