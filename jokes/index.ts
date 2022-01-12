interface acuditsDad{
    getMoreJokes():string;
}


let acudits = (<HTMLInputElement>document.getElementById('boton')).addEventListener('click',getMoreJokes);

const bromaContenedor: any = document.querySelector('#jokeContainer');
//Accés a acudits de Icanhazdadjoke

async function getMoreJokes(){
    try{
        const resultado = await fetch('https://icanhazdadjoke.com',{headers:{
            Accept: 'application/json'
        }});

        //console.log(resultado.json());
        const data = await resultado.json();
        //console.log(data.joke);
        bromaContenedor.textContent = data.joke;

    }catch(err){
        console.log(err);
    }
}

//Accés a acudits de Chuck Norris

async function getChuckJokes(){

    try{
        type alfanumerico = string | number
        const resultado = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await resultado.json();
        //console.log(data.value);
    }catch(err){
        console.log(err);
    }
}


//getMoreJokes();
//getChuckJokes();

function reportAcudits(){
    let variados:Array<any>=[];
}