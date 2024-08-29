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
    items[0].deliveryDate = shop.value;
    saveToStorage();
    alert(`${items[0].deliveryDate} has been chosen for the delivery of ${items[0].productName}.`);
    if(items[0].stock != 'Not Choosed' && items[0].destination != 'Not Choosed')
        {
            alert(`Order for the product ${items[0].productName} has been placed.\nTrack the product to know more details.`);
            window.location.href = 'tracking.html';
        }
    console.log(items);
})

shop1.addEventListener('change' , () =>{
    items[0].deliveryDate = shop1.value;
    saveToStorage();
    alert(`${items[0].deliveryDate} has been chosen for the delivery of ${items[0].productName}.`);
    if(items[0].stock != 'Not Choosed' && items[0].destination != 'Not Choosed')
        {
            alert(`Order for the product ${items[0].productName} has been placed.\nTrack the product to know more details.`);
            window.location.href = 'tracking.html';
        }
    console.log(items);
});

shop2.addEventListener('change' , () =>{
    items[0].deliveryDate = shop2.value;
    saveToStorage();
    alert(`${items[0].deliveryDate} has been chosen for the delivery of ${items[0].productName}.`);
    if(items[0].stock != 'Not Choosed' && items[0].destination != 'Not Choosed')
        {
            alert(`Order for the product ${items[0].productName} has been placed.\nTrack the product to know more details.`);
            window.location.href = 'tracking.html';
        }
    console.log(items);
})

document.querySelector('.add-address').addEventListener('click', () =>{
    if(address.value != ' ')
    {
        items[0].destination = address.value;
        saveToStorage();
        alert('Destination is saved');
        if(items[0].stock != 'Not Choosed' && items[0].deliveryDate != 'Not Choosed')
            {
                alert(`Order for the product ${items[0].productName} has been placed.\nTrack the product to know more details.`);
                window.location.href = 'tracking.html';
            }
    }
})

console.log(items);

document.querySelector('.button-login').addEventListener('click' , () =>{
    window.location.href = 'tracking.html';
})
