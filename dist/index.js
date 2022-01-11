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
let acudits = document.getElementById('boton').addEventListener('click', getMoreJokes);
const bromaContenedor = document.querySelector('#jokeContainer');
//Accés a acudits de Icanhazdadjoke
function getMoreJokes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resultado = yield fetch('https://icanhazdadjoke.com', { headers: {
                    Accept: 'application/json'
                } });
            //console.log(resultado.json());
            const data = yield resultado.json();
            //console.log(data.joke);
            bromaContenedor.textContent = data.joke;
        }
        catch (err) {
            console.log(err);
        }
    });
}
//Accés a acudits de Chuck Norris
function getChuckJokes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resultado = yield fetch('https://api.chucknorris.io/jokes/random');
            const data = yield resultado.json();
            //console.log(data.value);
        }
        catch (err) {
            console.log(err);
        }
    });
}
//getMoreJokes();
//getChuckJokes();
function reportAcudits() {
    let variados = [];
}
//# sourceMappingURL=index.js.map