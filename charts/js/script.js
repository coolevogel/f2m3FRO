const labels = [
    "dark souls 1",
    "dark souls 2",
    "dark souls 3",
    "elden ring",
]

datajson1 = "";

let gegevens = fetch("data.json").then(
    function (binnenGekomenGegevens) {
        return binnenGekomenGegevens.json();
    }).then(
        function (echteGegevens) {
            const datajson = echteGegevens.data
            const datajson1 = echteGegevens.data1

            const data = {
                labels: labels,
                datasets: [{
                    label: "Most played game in Hours",
                    data: datajson,
                    backgroundColor: ['rgb(255, 99, 132)',
                        'rgb(67, 145, 155)',
                        'rgb(48, 170, 221)',
                        'rgb(0, 255, 198)'


                    ]

                }]

            }

            const data1 = {
                labels: labels,
                datasets: [{
                    label: "Most played game in Hours",
                    data: datajson1,
                    backgroundColor: ['rgb(255, 99, 132)',
                        'rgb(67, 145, 155)',
                        'rgb(48, 170, 221)',
                        'rgb(0, 255, 198)'


                    ]

                }]
            }
            const config = {
                type: 'doughnut',
                data: data

            }
            const myChart = new Chart(
                document.getElementById("myChart1"),
                config

            )
            const config3 = {
                type: 'pie', 
                data: data1
            }
            const myChart3 = new Chart(
                document.getElementById('myChart3'),
                config3
            )
            
        }

    );



const start = document.getElementById("js--start");
const stopTimer = document.getElementById("js--stop");
const reset = document.getElementById("js--reset");


let seconds = 0;
let minutes = 0;
let miliseconden = 0;
let running = false;
let timer;



const secondsTimer = document.getElementById("js--seconds");
const minutesTimer = document.getElementById("js--minutes");
const milisecondenTimer = document.getElementById("js--miliseconds")


start.onclick = function () {
    if (running == true) {
        return;
    }
    running = true;
    timer = setInterval(function () {
        miliseconden = miliseconden + 1;
        if (miliseconden === 100) {
            miliseconden = miliseconden = 0;
            seconds = seconds + 1;
            if (seconds < 10) {
                secondsTimer.innerText = "0" + seconds
                return;
            }

            secondsTimer.innerText = seconds
        }
        if (seconds === 60) {
            seconds = seconds = 0;
            minutes = minutes + 1;
            minutesTimer.innerText = minutes
        }
        if (miliseconden < 10) {
            milisecondenTimer.innerText = "0" + miliseconden;
            return;
        }

        milisecondenTimer.innerText = miliseconden

    }, 10);

}

stopTimer.onclick = function () {
    clearInterval(timer);
    running = false;
}

reset.onclick = function () {
    minutes = 0;
    seconds = 0;
    miliseconden = 0;
    minutesTimer.innerText = minutes;
    secondsTimer.innerText = seconds;
    milisecondenTimer.innerText = miliseconden;
    clearInterval(timer);
    running = false;

}


function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
}

setInterval(displayTime, 10)



function getPokemon() {
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, steel = 0,
        fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
        ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0
    
    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'steel',
        'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']
    
    
    
    for (i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 500 + 1)
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)

            .then(function (response) {
                return response.json();
            })
            .then(function (pokemon) {
                switch (pokemon.types[0].type.name) {
                    case 'normal':
                        normal = normal + 1
                        break;
                    case 'water':
                        water = water + 1
                        break;
                    case 'fighting':
                        fighting = fighting + 1
                        break;
                    case 'flying':
                        flying = flying + 1
                        break;
                    case 'poison':
                        poison = poison + 1
                        break;
                    case 'ground':
                        ground = ground + 1
                        break;
                    case 'rock':
                        rock = rock + 1
                        break;
                    case 'bug':
                        bug = bug + 1
                        break;
                    case 'steel':
                        steel = steel + 1
                        break;
                    case 'fire':
                        fire = fire + 1
                        break;
                    case 'grass':
                        grass = grass + 1
                        break;
                    case 'electric':
                        electric = electric + 1
                        break;
                    case 'psychic':
                        psychic = psychic + 1
                        break;
                    case 'ice':
                        ice = ice + 1
                        break;
                    case 'dragon':
                        dragon = dragon + 1
                        break;
                    case 'dark':
                        dark = dark + 1
                        break;
                    case 'fairy':
                        fairy = fairy + 1
                        break;
                    case 'unknown':
                        unknown = unknown + 1
                        break;
                    case 'shadow':
                        shadow = shadow + 1
                        break;
                }

            }).then(function () {
                dataPokemon.datasets[0].data =[normal, fighting, flying, poison, ground, rock, bug, fire, water, grass, electric, psychic, ice, dragon, dark, fairy, unknown, shadow],
                pokemonchart.update()
            }
            )

    }
    const dataPokemon = {
        labels: labels,
        datasets: [{
            label: "Pokémon Types",
            data: [normal, fighting, flying, poison, ground, rock, bug, fire, water, grass, electric, psychic, ice, dragon, dark, fairy, unknown, shadow],
        
            backgroundColor: ['rgb(255, 99, 132)',
                'rgb(67, 145, 155)',
                'rgb(48, 170, 221)',
                'rgb(0, 255, 198)'


            ]

        }]

    }
    const config2 = {
        type: 'bar',
        data: dataPokemon
    }
    const pokemonchart  = new Chart(
        document.getElementById("myChart2"),
        config2
    )
}



getPokemon();