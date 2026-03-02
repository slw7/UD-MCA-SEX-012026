
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

