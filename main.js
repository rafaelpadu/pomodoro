let min = document.querySelector('.minutos');
let seg = document.querySelector('.segundos')
let min2 = document.querySelector('.minutos2');
let seg2 = document.querySelector('.segundos2')
const iniciar = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
let contador = 1500
let intervalo = false
let intervalo2 = false;
let contador2 = 10;
let sessoes = [];
let sesions = document.querySelector('.sessions');
let audio = document.createElement('audio')
iniciar.addEventListener('click', () => {
    if(iniciar.classList.contains('start')){
        modoStop();  
    }
    else{
        modoStart()
    }
    
})
stop.addEventListener('click', () => {
    min.innerHTML = '00';
    seg.innerHTML = '00';
    contador = 1500;
    intervalo = false;
    intervalo2 = false;
    if(iniciar.classList.contains('stop')) {
        iniciar.classList.remove('stop');
        iniciar.classList.add('start');
        iniciar.innerHTML = "Iniciar"
    }
})
reset.addEventListener('click', () => {
    contador = 10;
    intervalo = false;
    intervalo2 = false;
    min.innerHTML = 25;
    seg.innerHTML = '00';
    if(iniciar.classList.contains('stop')) {
        iniciar.classList.remove('stop');
        iniciar.classList.add('start');
        iniciar.innerHTML = "Iniciar"
    }
})
function modoStart(){
    iniciar.classList.remove('stop');
    iniciar.classList.add('start');
    iniciar.innerHTML = 'Iniciar'
    intervalo = false
    intervalo2 = false;
    
}
function modoStop(){
    iniciar.classList.remove('start');
    iniciar.classList.add('stop');
    iniciar.innerHTML = 'Pausar';
    intervalo = true;
    intervalo2 = false;
    start()
}
function start(){
    if(contador > 0 && intervalo == true){
        contador--
        setTimeout('start()', 1000);
        mudaHoras()
    }
    else if (contador == 0){
        tocaAlarme()
        sessoes.push(1);
        if(sessoes.length !== 0 && sessoes.length % 4 === 0){
            contador2 = 600;
        }
        else{   
            contador2 = 5;
        }
        intervalo2 = true
        mostraSessoes();
        start2();
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

function start2(){
    if(contador2 > 0 && intervalo2 == true){
        contador2--
        setTimeout('start2()', 1000);
        mudaHoras2()
    }
    else if(contador2 == 0){
        contador = 10;
        start();
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

function mostraSessoes(){
    sesions.innerHTML = sessoes.reduce((total,numero) => total + numero, 0) + 'ª';
}

function tocaAlarme(){
    audio.setAttribute('src','alarm.mp3');
    audio.currentTime = 3;
    audio.play();
}