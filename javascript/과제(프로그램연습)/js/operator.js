let first = document.querySelector('#num1');
let second = document.querySelector('#num2');
let third = document.querySelector('#result');
let sumbtn = document.querySelector('#add');
let minusbtn = document.querySelector('#sub');
let mulbtn = document.querySelector('#multy');
let divbtn = document.querySelector('#divid');

function sum(){
   third.value = `${Number(first.value) + Number(second.value)}`
}
sumbtn.onclick = sum;

function minus(){
   third.value = `${Number(first.value) - Number(second.value)}`

}
minusbtn.onclick = minus;

function mul(){
   third.value = `${Number(first.value) * Number(second.value)}`

}
mulbtn.onclick = mul;

function divi(){
   third.value = `${(Number(first.value) / Number(second.value))} `

}
divbtn.onclick = divi;


