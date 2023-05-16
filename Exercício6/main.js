// Exercício 1:
let ex = ['HTML', 1993, CSS, 1996, 'Bootstrap', 2011, 'JS', 1995, 'React', 2013, 'Java', 1995];
console.log(ex);
console.log(ex.length);
console.log(ex[6]);
let string = ex.toString();
console.log(typeof string);
let join = ex.join('***');
console.log(join);
let unshift = ex.unshift('IOS');
console.log(unshift);

// Exercício 2:
let ex2 = [
    ['HTML', 1993, 'CSS', 1996],  
['Bootstrap', 2011, 'JS', 1995],
['React', 2013, 'Java', 1995],
];
console.log(ex2);
console.log(ex2.length);
console.log(ex2[2][1]);
ex2[1][2] = 'Java Script';
console.log(ex2);
delete ex2[2][2];
console.log(ex2);
console.log(ex2.push('Pipoca'));