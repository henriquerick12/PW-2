// LISTA DE EX #PART 02

// EX: #01
const popuBrasil = 211; // MILHAO
const popuChina = 1398; // BILHAO
const result =
  popuBrasil > popuChina
    ? "População do Brasil é maior"
    : "População da China e maior";
console.log(result);

// EX: #02
var num = 3; // prompt('Digite o Número: ')
if (num % 2 === 0) {
  console.log("PAR");
} else {
  console.log("IMPAR");
}

// EX: #03
var numMes = 10; // prompt('Digite o Número: ')
var meses = [
  "",
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

for (let i = 1; i < meses.length; i++) {
  if (i === numMes) {
    console.log(meses[i]);
  }
}

// EX: #03
var arrayCopa = ["1958", "1962", "1970", "1994", "2002"];

// EX: #04
for (let i = 0; i < arrayCopa.length; i++) {
  console.log(`O Brasil ganhou a code de ${arrayCopa[i]}`);
}

// EX: #05
const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melãncia']
const frutaEscolhida = 'Pera'
for(let i = 0; i < frutas.length; i++){
  if(frutas[i] === frutaEscolhida){
    console.log(`A fruta escolhida foi ${frutaEscolhida}`)
    break
  }
}

// EX: #06
const frutas2 = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melãncia']
let ultima = frutas2.length
console.log(frutas2[ultima]) 

// EX: #07
function nomeCompleto(nome, sobrenome) {
  return console.log(`Olá ${nome} ${sobrenome}`);
}
nomeCompleto("Henrique", "Silva");

// EX: #08
function paisesVisitados(paisesVis) {
  let total = 193;
  let paisesRest = total - paisesVis;
  return console.log(`Ainda falta visitar ${paisesRest} de ${total} paises`);
}
paisesVisitados(93);

// EX: #09
function idades(idadeMinha, idadeParente) {
  if (idadeMinha > idadeParente) {
    console.log("Minha idade é maior");
  } else if (idadeMinha < idadeParente) {
    console.log("Minha idade é menor");
  } else {
    console.log("Minha idade é igual");
  }
}
idades(51, 50);

// EX: #10
const typeTipo = (tipoDado) => {
  return typeof tipoDado;
};
console.log(typeTipo(3));

// EX: #10
function perimeto(lado) {
  !!lado;
  let resultPe = lado === false ? false : lado * 4; // OPERADOR TERNARIO
  if (resultPe) {
    console.log(`O Perimeto é ${resultPe}`);
  } else {
    console.log(`Insira um Perimeto`);
  }
}
perimeto(2);

// EX: #11
var num11 = 4; // prompt('Digite o Número: ')
console.log(num11 % 2 === 0 ? "PAR" : "IMPAR");
