Roberto

let listaFrutas = [
  { nome: 'Maçã', preco: 3.50, estoque: 120 },
  { nome: 'Banana', preco: 2.20, estoque: 200 },
  { nome: 'Laranja', preco: 2.80, estoque: 150 },
  { nome: 'Uva', preco: 6.90, estoque: 90 },
  { nome: 'Pera', preco: 4.10, estoque: 80 },
  { nome: 'Manga', preco: 5.00, estoque: 60 },
  { nome: 'Abacaxi', preco: 7.50, estoque: 40 },
  { nome: 'Melancia', preco: 10.00, estoque: 30 },
  { nome: 'Kiwi', preco: 8.90, estoque: 55 },
  { nome: 'Morango', preco: 9.90, estoque: 70 }
];

// A. Preço do segundo objeto (Banana)
console.log("Preço do segundo objeto: 2.20");

// B. Nome do terceiro objeto (Laranja)
console.log("Nome do terceiro objeto: Laranja");

// C. Quantidade de itens no array
console.log("Total de itens: 10"); 

// D. Imprimir o nome de todos os objetos
console.log("Nomes das frutas:");
console.log("Maçã");
console.log("Banana");
console.log("Laranja");
console.log("Uva");
console.log("Pera");
console.log("Manga");
console.log("Abacaxi");
console.log("Melancia");
console.log("Kiwi");
console.log("Morango");

// E. Soma total do estoque
let somaEstoque = 120 + 200 + 150 + 90 + 80 + 60 + 40 + 30 + 55 + 70;
console.log("895: " + somaEstoque);

// F. Objeto com maior estoque (Banana)
let maiorEstoque = listaFrutas[1]; // Começa com o segundo objeto (Banana)

for (let i = 1; i < listaFrutas.length; i++) {
  if (listaFrutas[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = listaFrutas[i];
  }
}

console.log("banana:", maiorEstoque);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Gabriel

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Daniel

let perifericos = [
  { nome: 'Teclado', preco: 120.00, estoque: 35 },
  { nome: 'Mouse', preco: 80.00, estoque: 50 },
  { nome: 'Monitor', preco: 900.00, estoque: 20 },
  { nome: 'Headset', preco: 250.00, estoque: 15 },
  { nome: 'Webcam', preco: 180.00, estoque: 28 },
  { nome: 'Microfone', preco: 300.00, estoque: 12 },
  { nome: 'Caixa de Som', preco: 220.00, estoque: 18 },
  { nome: 'Mousepad', preco: 40.00, estoque: 60 },
  { nome: 'Controle', preco: 350.00, estoque: 10 },
  { nome: 'Pen Drive', preco: 70.00, estoque: 45 }
];
// A. Preço do segundo objeto (Mouse)
console.log(perifericos[1].preco);
// B. Nome do terceiro objeto (Monitor)
console.log(perifericos[2].nome);
// C. Quantidade de itens no array
console.log(perifericos.length);
// D. Imprimir o nome de todos os objetos
for (let i = 0; i < perifericos.length; i++) {
  console.log(perifericos[i].nome);
}
// E. Soma total do estoque
let somaEstoque = 0;
for (let i = 0; i < perifericos.length; i++) {
  somaEstoque += perifericos[i].estoque;
}
console.log("Soma total do estoque: " + somaEstoque);
// F. Objeto com maior estoque (Mousepad
let maiorEstoque = perifericos[0];
for (let i = 1; i < perifericos.length; i++) 
  if (perifericos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = perifericos[i];
  }



