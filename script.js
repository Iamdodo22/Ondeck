"use strict";
const modal = document.querySelector('.modal');
const product = document.querySelector('.prod');
const close = document.querySelector('.close');
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');




product.addEventListener('click', ()=>{
    modal.classList.toggle('opacity-0')
})

window.addEventListener("DOMContentLoaded", (e)=>{
        close.addEventListener("click", ()=>{
            modal.classList.toggle('opacity-0')
        })

        menuBtn.addEventListener('click', ()=>{
            menu.classList.toggle('opacity-0')
        })
})