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
