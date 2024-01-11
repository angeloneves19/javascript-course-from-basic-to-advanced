//String, number, undefined, null, Boolean
const nome = "Luiz"; //String
const nome1 = "Luiz"; //String
const nome2 = `Luiz`; //String
const num1 = 10; //Number
const num2 = 10.52; //Number
let numeAluno; // undefined  -> não aponta para nem um lugar da memória.
let sobrenomeAluno = null; // Nulo -> não aponta para nem um lugar da memória
const aprovado = false; //Boolean = true ou false (lógico)

console.log(typeof aprovado, sobrenomeAluno);

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

//Isso acontece porque o let é redeclarável e o const não.
// Se adicionarmos um valor para let, podemos modificá-lo.
//Agora, o const, se adicionarmos um valor, ele fica com ele e não podemos modificá-lo.
let c = 2;
const d = c;

console.log(c, d); //2,2
c = 3;

console.log(c, d); //3,2
