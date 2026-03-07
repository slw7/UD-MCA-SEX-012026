Roberto

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Gabriel

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Daniel

let Roupas = {
  nome: 'Camiseta',
  cor: 'Preta',
  preco: 59.90,
  estoque: 120
};
// A. Acessar o nome do objeto
console.log(Roupas.nome);
// B. Acessar o preço usando colchetes 
console.log(Roupas['preco']);
// C. Atualizar o estoque para 80
Roupas.estoque = 80;
console.log(Roupas.estoque);
// D. Imprimir todas as propriedades
for (let chave in Roupas) {
  console.log(chave + ": " + Roupas[chave]);
}



