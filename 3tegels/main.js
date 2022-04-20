const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop")
const resetButton = document.getElementById("js--resetButton")

let seconds = 0;
let minutes = 0;
let running = false


const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer")

let timer;

startButton.onclick = function(){
    if(running === true){
        return;
    }
    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds === 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;   
        }
        secondsTimer.innerText = seconds;
    },1000);
}
stopButton.onclick = function(){
    running = false;
    clearInterval(timer);
}

resetButton.onclick = function(){
    minutesTimer.innerText = 0;
    secondsTimer.innerText = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(timer);
    running = false;
    
    
}
/*slider*/

const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider")
const body = document.getElementById("js--body")

slider.value = "2";
rangeValue.innerText = slider.value + "X";

slider.oninput = function(){
    rangeValue.innerText = slider.value + "X";
    body.style.fontSize = slider.value + "rem"
    
}

const paragraph = document.getElementById("js--text");
const img = document.getElementById("js--image");
//data ophalen
let data = fetch("data.json").then(
    function(BinnenGekomenData){
        return BinnenGekomenData.json();
    }).then(
        function (echtedata) {
            console.log(echtedata);
            paragraph.innerHTML = echtedata.text;
            img.src = echtedata.image;
        }
    );