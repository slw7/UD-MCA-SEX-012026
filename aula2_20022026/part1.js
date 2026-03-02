let arrayPerifericos= [
  'teclado',
  'mouse',
  'monitor',
  'processador',
  'placaMae',
  'memoriaRAM',
  'ssd',
  'hd',
  'gabinete',
  'fonte',
  'headset',
  'microfone',
  'webcam',
  'impressora',
  'scanner',
  'roteador',
  'switch',
  'notebook',
  'tablet',
  'smartphone',
  'pendrive'
];
// A. Elementos nas posições 0, 7, 11, 15, 18 e 20
console.log(arrayPerifericos[0]);
console.log(arrayPerifericos[7]);
console.log(arrayPerifericos[11]);
console.log(arrayPerifericos[15]);
console.log(arrayPerifericos[18]);
console.log(arrayPerifericos[20]);
// B. Penúltimo e último elemento
console.log(arrayPerifericos[arrayPerifericos.length - 2]);
console.log(arrayPerifericos[arrayPerifericos.length - 1]);
// C. Quantidade de elementos
console.log("Total de elementos:"[21], arrayPerifericos.length);
// D. Adicionar novo elemento ao final do array
arrayPerifericos.push('caixa de som');
console.log(arrayPerifericos);
// E. Imprimir todos os elementos usando for
for (let i = 0; i < arrayPerifericos.length; i++) {
  console.log(arrayPerifericos[i]);
}
