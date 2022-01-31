"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Variables Weather
const header = document.getElementById('header');
const weatherContainer = document.getElementById('weather-container');
const temperaturaValor = document.getElementById('temperatura-valor');
const iconoAnimado = document.getElementById('icono-animado');
//Variables container
const body = document.getElementById('body');
const container = document.getElementById('container');
const jokeContainer = document.getElementById('joke-container');
const jokeBlock = document.getElementById('joke-block');
const joke = document.querySelector('.joke-container');
const valoration = document.getElementById('valoration');
const valorationBlock = document.createElement('ul');
valorationBlock.classList.add('ul');
const btn = document.getElementById('btn');
let jokeInfo;
let reportJokes = [];
let isoDate = new Date().toISOString();
valorationBlock.innerHTML = `
<li><button class="valoration-boton" id="1">😒</button></li>
<li><button class="valoration-boton" id="2">😐</button></li>
<li><button class="valoration-boton" id="3">😆</button></li>
`;
console.log(valorationBlock);
btn.addEventListener("click", getMoreJokes);
class MyJoke {
    constructor(joke, score, date) {
        (this.joke = joke),
            (this.score = score),
            (this.date = date);
    }
}
//FUNCIÓ al Clickar el Botó next!
function getMoreJokes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resultado = yield Promise.all([
                fetch('https://icanhazdadjoke.com', {
                    headers: {
                        Accept: 'application/json',
                    },
                }).then((value) => __awaiter(this, void 0, void 0, function* () { return yield value.json(); })),
                fetch('https://api.chucknorris.io/jokes/random').then((value) => __awaiter(this, void 0, void 0, function* () { return yield value.json(); })),
            ]);
            //console.log(resultado[0].joke);
            //console.log(resultado[1].value);
            const arrayJokes = [];
            arrayJokes[0] = resultado[0].joke.toString();
            arrayJokes[1] = resultado[1].value.toString();
            const randomJokes = arrayJokes[Math.floor(Math.random() * arrayJokes.length)];
            //console.log(randomJokes);
            jokeBlock.innerText = randomJokes;
            valoration.appendChild(valorationBlock);
            //REPORT SECTION
            let bad = document.getElementById('1');
            let meh = document.getElementById('2');
            let good = document.getElementById('3');
            let arrayVal = [bad, meh, good];
            arrayVal.filter((val) => {
                val.addEventListener('click', function () {
                    if (val === bad) {
                        jokeInfo = new MyJoke(joke.innerText, 1, isoDate);
                    }
                    if (val === meh) {
                        jokeInfo = new MyJoke(joke.innerText, 2, isoDate);
                    }
                    if (val === good)
                        jokeInfo = new MyJoke(joke.innerText, 3, isoDate);
                });
            });
            if (jokeInfo !== undefined) {
                reportJokes.push(jokeInfo);
            }
            console.log(reportJokes);
            body.style.background = backgroundStyle();
        }
        catch (err) {
            console.log('Error', err);
        }
    });
}
//WEATHER ACCESS
window.addEventListener('load', () => {
    //let lon:number|string;
    //let lat:number|string;
    let temperaturaValor = document.getElementById('temperatura-valor');
    let iconoAnimado = document.getElementById('icono-animado');
    //let temperaturaDescripcion =<HTMLInputElement>document.getElementById('temperatura');
    //let ubicacion = <HTMLInputElement>document.getElementById('ubicacion');
    //let vientoVelocidad = <HTMLInputElement>document.getElementById('viento-velocidad');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicion) => {
            //console.log('Lat ->',posicion.coords.latitude, 'Long ->',posicion.coords.longitude );
            //UBICACION ACTUAL
            /*
            `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c813f2748d4825e65ccf6f3bfe4e2464`
            */
            //Ubicacion por CIUDAD
            /*
            `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=es&units=metric&appid=c813f2748d4825e65ccf6f3bfe4e2464`
            */
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=es&units=metric&appid=c813f2748d4825e65ccf6f3bfe4e2464`).then((response) => {
                return response.json();
            }).then((data) => {
                let temp = data.main.temp.toFixed(1);
                temperaturaValor.textContent = `${temp}ºC`;
                //let name = data.name;
                //ubicacion.textContent = `${name}`;
                //let desc = data.weather[0].description;
                //temperaturaDescripcion.textContent = desc.toLowerCase();
                //let velocidad = data.wind.speed;
                //vientoVelocidad.textContent = `${velocidad}m/s`
                console.log(data.weather[0].main);
                //Inyectamos los Iconos en funcion de la desc del tiempo
                switch (data.weather[0].main) {
                    case "Clear":
                        iconoAnimado.src = "./img/day.svg";
                        //console.log("Limpio");
                        break;
                    case "Clouds":
                        iconoAnimado.src = "./img/cloudy.svg";
                        //console.log("Limpio");
                        break;
                    case "Snow":
                        iconoAnimado.src = "./img/snowy-1.svg";
                        //console.log("Limpio");
                        break;
                    case "Rain":
                        iconoAnimado.src = "./img/rainy-3.svg";
                        //console.log("Limpio");
                        break;
                    case "Drizzle":
                        iconoAnimado.src = "./img/rainy-1.svg";
                        // console.log("Limpio");
                        break;
                    case "Thunderstorm":
                        iconoAnimado.src = "./img/thunder.svg";
                        //console.log("Limpio");
                        break;
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
});
//RANDOM BACKGROUNDS
function backgroundStyle() {
    let random = Math.floor(Math.random() * 10) + 1;
    let background = [
        'url("./background/blob (6).svg")',
        'url("./background/blob (7).svg")',
        'url("./background/blob (8).svg")',
        'url("./background/blob (9).svg")',
        'url("./background/blob (10).svg")',
        'url("./background/blob (11).svg")',
        'url("./background/blob (12).svg")',
        'url("./background/blob (13).svg")',
        'url("./background/blob (14).svg")',
        'url("./background/blob (15).svg")'
    ];
    return background[random].toString();
}
