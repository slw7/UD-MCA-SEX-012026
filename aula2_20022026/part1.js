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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let simplesarray = [
  'Maçã',
  'Banana',
  'Laranja',
  'Uva',
  'Manga',
  'Abacaxi',
  'Morango',
  'Kiwi',
  'Pera',
  'Melancia',
  'Mamão',
  'Limão',
  'Cereja',
  'Pêssego',
  'Ameixa',
  'Caju',
  'Goiaba',
  'Maracujá',
  'Framboesa',
  'Amora',
  'Tangerina',
  'Graviola'
];

// A. Elementos nas posições 0, 7, 11, 15, 18, 19 e 20

console.log(simplesarray[0]);
console.log(simplesarray[7]);
console.log(simplesarray[11]);
console.log(simplesarray[15]);
console.log(simplesarray[18]);
console.log(simplesarray[19]);
console.log(simplesarray[20]);

// B. Penúltimo e Último elemento

console.log(simplesarray[simplesarray.length - 2]);
console.log(simplesarray[simplesarray.length - 1]);

// C. Quantidade de elementos
console.log("Total de elementos:", simplesarray.length);(Total de elementos: 21)

// D. Adicionar novo elemento no final do array
simplesarray.push('Imbu');
console.log(simplesarray);

// E. Imprimir todos os elementos usando for
for (let i = 0; i < simplesarray.length; i++) {
  console.log(simplesarray[i]);
}   


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
