'use strict'
const menu = document.getElementById('btn-abrir-menu');
menu.addEventListener('click',()=>{
    document.getElementById('container-menu').classList.toggle('active');
});