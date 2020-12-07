let min = document.querySelector('.minutos');
let seg = document.querySelector('.segundos')
let min2 = document.querySelector('.minutos2');
let seg2 = document.querySelector('.segundos2')
const iniciar = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const iniciar2 = document.querySelector('.start2');
const stop2 = document.querySelector('.stop2');

let contador = 1500
let intervalo, intervalo2
let contador2 = 300;

iniciar.addEventListener('click', () => {
    intervalo = false
    start()
})
function start(){
    if(contador > 0 && intervalo == false){
        contador--
        setTimeout('start()', 1000);
        mudaHoras()
    }
}
    
function mudaHoras(){
    function transformaNumero(numero){
        if(numero<=9){
            numero = '0' + numero;
        }
        return numero;
}
min.innerHTML = transformaNumero(Math.trunc((contador%3600)/60));
seg.innerHTML = transformaNumero((contador%3600)%60);

}

stop.addEventListener('click', () => {
    intervalo = true;
})

reset.addEventListener('click', () => {
    contador = 1500;
    intervalo = true;
    min.innerHTML = 25;
    seg.innerHTML = '00';
})

iniciar2.addEventListener('click', () => {
    intervalo2 = false
    start2();
})
stop2.addEventListener('click', () => {
    intervalo2= true;
})
function start2(){
    if(contador2 > 0 && intervalo2 == false){
        contador2--
        setTimeout('start2()', 1000);
        mudaHoras2()
    }
}

function mudaHoras2(){
    function transformaNumero2(numero){
        if(numero<=9){
            numero = '0' + numero;
        }
        return numero;
}
min2.innerHTML = transformaNumero2(Math.trunc((contador2%3600)/60));
seg2.innerHTML = transformaNumero2((contador2%3600)%60);

}