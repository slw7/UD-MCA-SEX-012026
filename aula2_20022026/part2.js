let fruta =  {
    nome: 'Maçã',
    cor: 'Vermelha',
    preco: 4,
    estoque: 100
    };

// A. Acessar o nome do objeto
console.log("Maçã:", fruta.nome); 

// B. Acessar o preço usando colchetes
console.log("4:", fruta['preco']);

// C. Atualizar o estoque para 80
fruta.estoque = 80;
console.log("Estoque atualizado:", fruta.estoque);

// D. Imprimir todas as propriedades
for (let chave in fruta) {
  console.log(chave + ": " + fruta[chave]);
}
