import {items, saveToStorage} from './products.js'
import { formattedTomorrow, formatteddate5, formattedday10 } from './shipping.js';

let address = document.querySelector('.address');
var shop = document.querySelector('.ship');
var shop1 = document.querySelector('.ship1');
var shop2 = document.querySelector('.ship2');
let data = document.querySelector('.date');
shop.value = formattedday10;
shop1.value = formatteddate5;
shop2.value = formattedTomorrow;

shop.addEventListener('change' , () =>{
    if(address.value === ''){
        alert('Choose the destination first');
        shop.checked = false;
    }
    items[0].deliveryDate = shop.value;
    items[0].destination = address.value;
    saveToStorage();
    console.log(items);
})

shop1.addEventListener('change' , () =>{
    if(address.value === ''){
        alert('Choose the destination first');
        shop1.checked = false;
    }
    items[0].deliveryDate = shop1.value;
    items[0].destination = address.value;
    saveToStorage();
    console.log(items);
});

shop2.addEventListener('change' , () =>{
    if(address.value === ''){
        alert('Choose the destination first');
        shop2.checked = false;
    }
    items[0].deliveryDate = shop1.value;
    items[0].destination = address.value;
    saveToStorage();
    console.log(items);
})

console.log(items);

let quanReq = document.querySelector('.quantityReq');

let buttonLogin = document.querySelector('.button-login');
buttonLogin.addEventListener('click' , () =>{
    if(items.length === 0){
        alert('No products added');
    }  
    else if(address.value === '' ){
        alert('Enter the destination');
    }
    else if(quanReq.value === ''){
        alert('Enter the quantity required');
    }
    else{
        items[0].destination = address.value;
        window.location.href = 'tracking.html';
    }
})