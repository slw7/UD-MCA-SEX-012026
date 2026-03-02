
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

