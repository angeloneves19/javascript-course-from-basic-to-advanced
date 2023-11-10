/**
 * Exercicio
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1993
 */

const name = "Luiz Otávio";
const lastname = "Miranda";
const age = 30;
const weight = 84;
const heightInMeters = 1.80;
let bodyMassIndex = weight / (heightInMeters * heightInMeters);
const date = new Date();
const year = date.getFullYear();
let birthYear = year - age;

console.log(`${name} ${lastname} tem ${age} anos pesa ${weight} kg`)
console.log(`tem ${bodyMassIndex} de altura e seu IMC é de ${bodyMassIndex}`)
console.log(`${name} nasceu em ${birthYear}`)