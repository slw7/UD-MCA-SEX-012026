let arrayFrutas = [
  'Maçã',
  'Banana',
  'Laranja',
  'Uva',
  'Pera',
  'Manga',
  'Abacaxi',
  'Melancia',
  'Kiwi',
  'Morango',
  'Cereja',
  'Limão',
  'Pêssego',
  'Ameixa',
  'Goiaba',
  'Maracujá',
  'Caju',
  'Mamão',
  'Framboesa',
  'Mirtilo',
  'Tangerina'
];

// A. Elementos nas posições 0, 7, 11, 15, 18 e 20
console.log(arrayFrutas[0]);
console.log(arrayFrutas[7]);
console.log(arrayFrutas[11]);
console.log(arrayFrutas[15]);
console.log(arrayFrutas[18]);
console.log(arrayFrutas[20]);

// B. Penúltimo e último elemento
console.log(arrayFrutas[arrayFrutas.length - 2]);
console.log(arrayFrutas[arrayFrutas.length - 1]);

// C. Quantidade de elementos
console.log("Total de elementos:"[21], arrayFrutas.length);

// D. Adicionar novo elemento ao final do array
arrayFrutas.push('Abacate');
console.log(arrayFrutas);

// E. Imprimir todos os elementos usando for
for (let i = 0; i < arrayFrutas.length; i++) {
  console.log(arrayFrutas[i]);
}
