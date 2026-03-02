// PART 3

// Crie um array de objetos

let objetos = [
  { nome: 'Caderno', preco: 10, estoque: 100 },
  { nome: 'Caneta', preco: 20, estoque: 200 },
  { nome: 'Lápis', preco: 30, estoque: 300 },
  { nome: 'Borracha', preco: 40, estoque: 400 },
  { nome: 'Mochila', preco: 50, estoque: 500 },
  { nome: 'Estojo', preco: 60, estoque: 600 },
  { nome: 'Livro', preco: 70, estoque: 700 },
  { nome: 'Régua', preco: 80, estoque: 800 },
  { nome: 'Apontador', preco: 90, estoque: 900 },
  { nome: 'Calculadora', preco: 100, estoque: 1000 }
];

// A. Preco do segundo objeto [Caneta]
console.log(objetos[1].preco);

// B. Nome do terceirto objeto [Lápis]
console.log(objetos[2].nome);

// C. Quantidade de objetos
console.log("Quantidade de objetos:", objetos.length);

// D. imprimir o nome de todos os objetos
for (let i = 0; i < objetos.length; i++) {  
  console.log(objetos[i].nome);
}

// E. Soma total do estoque
let somaEstoque = 0;
for (let i = 0; i < objetos.length; i++) {
  somaEstoque += objetos[i].estoque;
}

// F. Objeto com maior estoque
let maiorEstoque = objetos[9]; // Inicialmente, o objeto com maior estoque é o último da lista
for (let i = 0; i < objetos.length; i++) {
  if (objetos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = objetos[i];
  }
}
console.log("Objeto com maior estoque:", maiorEstoque.nome, "com estoque de", maiorEstoque.estoque);

