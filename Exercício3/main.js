let fruta1 = 'uva';
let fruta2 = 'Banana';
let fruta3 = 'Melancia';
let fruta4 = 'Uva';
let fruta5 = 'Abacaxi';

let tamanho1 = fruta1.length;
let tamanho2 = fruta2.length;
let tamanho3 = fruta3.length;
let tamanho4 = fruta4.length;
let tamanho5 = fruta5.length;

let sub1 = fruta1.substring(0, 3);
let sub2 = fruta2.substring(0, 3);
let sub3 = fruta3.substring(0, 3);
let sub4 = fruta4.substring(0, 3);
let sub5 = fruta5.substring(0, 3);

fruta1 = fruta1.trim();
fruta2 = fruta2.trim();
fruta3 = fruta3.trim();
fruta4 = fruta4.trim();
fruta5 = fruta5.trim();

fruta1 = fruta1.toLowerCase();
fruta2 = fruta2.toLowerCase();
fruta3 = fruta3.toLowerCase();
fruta4 = fruta4.toLowerCase();
fruta5 = fruta5.toLowerCase();

console.log(`As frutas são:
${fruta1} - ${fruta2} - ${fruta3} - ${fruta4} - ${fruta5}`);

console.log(`Informações adicionais:
${fruta1}: comprimento = ${tamanho1}, 3 primeiros caracteres = ${sub1}
${fruta2}: comprimento = ${tamanho2}, 3 primeiros caracteres = ${sub2}
${fruta3}: comprimento = ${tamanho3}, 3 primeiros caracteres = ${sub3}
${fruta4}: comprimento = ${tamanho4}, 3 primeiros caracteres = ${sub4}
${fruta5}: comprimento = ${tamanho5}, 3 primeiros caracteres = ${sub5}`);
