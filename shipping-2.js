import {items, saveToStorage} from './products.js'
import {products} from './shipping.js'


var today = new Date();
var date = (today.getDate()+ 2)+ '/'+ (today.getMonth()+ 1)+ '/'+ today.getFullYear();
var date5 = (today.getDate()+ 5)+ '/'+ (today.getMonth()+ 1)+ '/'+ today.getFullYear();
var date10 = (today.getDate()+ 8)+ '/'+ (today.getMonth()+ 1)+ '/'+ today.getFullYear();
console.log(products);

let address = document.querySelector('.address');
var shop = document.querySelectorAll('.ship');
var shop1 = document.querySelectorAll('.ship1');
var shop2 = document.querySelectorAll('.ship2');
let data = document.querySelectorAll('.date');
shop.value = date10;
shop1.value = date5;
shop2.value = date;

let matchItem;

document.querySelectorAll('.ship')
    .forEach((button) =>{
        button.addEventListener('change' , () =>{
            let productName = button.dataset.productName;
            if(address.value === ''){
                alert('Choose the destination first');
                button.checked = false;
            }
            items.forEach((item) =>{
                if(item.productName = productName){
                    matchItem = item;
                }
            })
            if(matchItem){
                matchItem.deliveryDate = shop.value;
                matchItem.destination = address.value;
            }
            saveToStorage();
            console.log(items);
        })
    })

    document.querySelectorAll('.ship1')
     .forEach((button) =>{
        button.addEventListener('change' , () =>{
            let productName = button.dataset.productName;
            if(address.value === ''){
                alert('Choose the destination first');
                button.checked = false;
            }
            items.forEach((item) =>{
                if(item.productName = productName){
                    matchItem = item;
                }
            });
            if(matchItem){
                matchItem.deliveryDate = shop1.value;
                matchItem.destination = address.value;
            } 
               saveToStorage();
               console.log(items);
        });
    })

    document.querySelectorAll('.ship2')
     .forEach((button) =>{
        button.addEventListener('change' , () =>{
                if(address.value === ''){
                    alert('Choose the destination first');
                    button.checked = false;
                }
                let productName = button.dataset.productName;
                items.forEach((item) =>{
                    if(item.productName = productName){
                        matchItem = item
                    }
                })
                if(matchItem){
                    matchItem.deliveryDate = shop2.value;
                    matchItem.destination = address.value;

                }
                saveToStorage();
                console.log(items);
        })
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
        items.forEach((item) =>{
            item.destination = address.value;
        })
        window.location.href = 'tracking.html';
    }
    
})