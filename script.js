var contador = 0;

let btnStart = document.getElementById("btn-start");
btnStart.addEventListener("click",startTimer);

let btnStop = document.getElementById("btn-stop");
btnStop.addEventListener("click",stopTimer);

let btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click",resetTimer);

var interval;


function startTimer(){
    clearInterval(interval);
    interval = setInterval(count,10);
}

function resetTimer(){
    clearInterval(interval);
    contador = 0;
    document.getElementById('timer').innerHTML = '00:00:00';
}

function stopTimer(){
    clearInterval(interval);
}

function count(){
    contador += 1
    let miliseconds = contador * 10;
    date = new Date(miliseconds).toISOString().slice(14, 22);
    document.getElementById('timer').innerHTML = date.replace('.',':');
}