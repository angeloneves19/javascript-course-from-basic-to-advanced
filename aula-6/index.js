//test1
let nome = 'João'; //String sempre, não havia botado dai não funcionou!

console.log(nome, ' nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de ', nome, 'se chama Eduardo.');

//test2
console.log(`TEST 2`);
let name;//Declaro a variável
name = 'Henrique'; //Inicializo a variável, passando um String
console.log(name); //Resultado
name = 'Jordan'; //Podemos redeclarar a  variável, quando não a declaramos!
console.log(name);

//test3
console.log(`TEST 3`);
//Não podemos criar variáveis com palavras reservadas
//Variáveis precisam ter nomes significativos
let nameClient = 'Jorge';
console.log(nameClient);

// Não podemos começar o nome de uma variável com um número.
/**
 * Exemplo
 * let 1nome
 * Não é certo!
 */
// É recomendado começar o nome das variáveis sempre com letra minúscula.
// Depois da primeira letra, podemos adicionar um número, o código não quebrará.
// Ao declarar o nome de uma variável, não podemos adicionar espaços ou traços.
// Sempre que vamos declarar uma variável, utilizamos o modo camelCase, que significa que a primeira palavra é minúscula e as demais começam com a primeira letra maiúscula.
// Case-sensitive => a letra maiúscula e minúscula fazem diferença!
let nameStudent = 'Márcio';
let namestudent = 'Otavio';
console.log(nameStudent, namestudent);
