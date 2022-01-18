'use strict'

const menu = document.getElementById('btn-abrir-menu');
menu.addEventListener('click', ()=>{
    document.getElementById('contenedor-menu').classList.toggle('active');
})