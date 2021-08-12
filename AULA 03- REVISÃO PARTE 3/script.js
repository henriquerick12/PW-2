// LISTA DE EXERCIOS

// EX: #01
classAtivo = document.getElementsByClassName('ativo')
console.log(classAtivo)

// EX: #02 
allimgs = document.querySelectorAll('img');
console.log(Array.from(allimgs))

// EX: #03
aH2 = document.querySelector('.animais-descricao').children[0].children[0]
console.log(aH2)

// EX: #04
lastP = document.querySelectorAll('p')
console.log(lastP[lastP.length - 1])

// EX: #05
document.querySelectorAll('.titulo')[0].classList.add('ativo')
document.querySelectorAll('.titulo')[1].classList.add('ativo')
document.querySelectorAll('.titulo')[2].classList.add('ativo')
console.log(document.querySelectorAll('.titulo'))

// EX: #06
document.querySelectorAll('.titulo')[0].classList.remove('ativo')
document.querySelectorAll('.titulo')[1].classList.remove('ativo')
console.log(document.querySelectorAll('.titulo'))
