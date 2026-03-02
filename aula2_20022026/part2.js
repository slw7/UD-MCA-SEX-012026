// PART 2 

//  Crie um objeto

let produto = {
  nome: 'Camiseta',
  cor: 'Azul',
  preco: 10.00,
  estoque: 30
};

// A. Como acessar o nome do objeto
console.log(produto.nome);
console.log(produto.[Camiseta]);

// B. Como acessar o preço do objeto utilzando a notação de colchetes
console.log(produto['preco']);
console.log(Camiseta['preco']);


// C. Atualize o estoque para 80
produto.estoque = 80;
console.log("Estoque atualizado:", produto.estoque);

// D. Imprimir todas as propriedades
for (let chave in produto) {
  console.log(chave + ": " + produto[chave]);
}

