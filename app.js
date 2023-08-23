'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')





function mudarCor(){
    forma1.classList.toggle('vermelho')
}

function mudarForma(){
    forma2.classList.toggle('circulo')
}
function mudarCoreforma(){
    forma3.classList.toggle('tringulo')
}
function girar(){
    forma4.classList.toggle('girar')
}
function imagem(){
    forma5.classList.toggle('imagem')
}
function pulsando(){
    forma6.classList.toggle('pulsando')
}
function desaparecer(){
    forma7.classList.toggle('desaparecer')
}
function pular(){
    forma8.classList.toggle('pular')
}


forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarCoreforma)
forma4.addEventListener('click', girar)
forma5.addEventListener('click', imagem)
forma6.addEventListener('click', pulsando)
forma7.addEventListener('click', desaparecer)
forma8.addEventListener('click', pular)
