let valor;
let valorHEX = ['0', '0', '0']
/** 
*  PEGAR VALORES DOS CAMPOS IMPUTS
*/
const textInput1 = document.getElementById('rgba1')
const textInput2 = document.getElementById('rgba2')
const textInput3 = document.getElementById('rgba3')
/**
 *  PEGAR VALOR DIV
 */
const divColor = document.getElementById('block-color')
/** 
*  PEGAR VALORES DOS CAMPOS RANGES E DEFININDO O VALOR NO INPUT E FUNÇÕES
*/

myfunction1 = (e) => {
    let valor1 = e.target.value
    textInput1.value = valor1
    valorHEX[0] = valor1
    divColor.style.backgroundColor = `rgb(${valorHEX[0]},${valorHEX[1]},${valorHEX[2]})`
}

myfunction2 = (e) => {
    let valor2 = e.target.value
    textInput2.value = valor2
    valorHEX[1] = valor2
    divColor.style.backgroundColor = `rgb(${valorHEX[0]},${valorHEX[1]},${valorHEX[2]})`
}

myfunction3 = (e) => {
    let valor3 = e.target.value
    textInput3.value = valor3
    valorHEX[2] = valor3
    divColor.style.backgroundColor =  `rgb(${valorHEX[0]},${valorHEX[1]},${valorHEX[2]})`
}

const rang1 = document.getElementById('range1').addEventListener('input', myfunction1)

const rang2 = document.getElementById('range2').addEventListener('input', myfunction2)

const rang3 = document.getElementById('range3').addEventListener('input', myfunction3)







