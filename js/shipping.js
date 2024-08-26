import {removeFromCart , items , saveToStorage} from './products.js'
import { products } from './array.js';

let orderHTML ;
const productName = items[0].productName;
let matchingProduct = {};
products.forEach((product) =>{
    if(product.productName === productName){
        matchingProduct = product;
    }
})
orderHTML +=  ` <div class="order order-${matchingProduct.productName}">
                        <button class="close-button" 
                            data-product-name="${matchingProduct.productName}" >
                            <span class="tooltip">Remove</span>
                            <img class="close"src="../Images/10263335.png">
                        </button>
                        <div class="one">
                            <div class="left">
                                <h4 class="Name">${matchingProduct.productName}</h4>
                                <span class="reqP"> Quantity required:</span>
                                <input class="quantityReq" type="text" placeholder="in ${matchingProduct.measure} ">
                                <button class="save " data-product-name="${matchingProduct.productName}">Save</button>
                                <p class="price-per">Cost per ${matchingProduct.measure}: 
                                    <span class="cost">Rs.${matchingProduct.productCost}</span> </p>
                                <p class="total-price"> Stock : <span class="stock">${matchingProduct.stock} </span><span class="measure">${matchingProduct.measure}</span></p>
                            </div>
                            <div class="right">
                                <p class="tag">Choose a delivery option:</p>
                                <div class="after-9">
                                    <input type="radio" data-product-name="${matchingProduct.productName}"class="ship" value="" name = ${matchingProduct.productName}>
                                    <label class="shipping"></label>
                                    <p class="costShip"> FREE Shipping</p>
                                </div>
                                <div class="after-5">
                                    <input type="radio" data-product-name="${matchingProduct.productName}" class="ship1" value="" name = ${matchingProduct.productName}>
                                    <label  class="shipping1"></label>
                                    <p class="costShip">Rs.70 - Shipping</p>
                                </div>
                                <div class="after-1">
                                    <input type="radio" data-product-name="${matchingProduct.productName}" class="ship2" value="" name = ${matchingProduct.productName}>
                                    <label class="shipping2"></label>
                                    <p class="costShip">Rs.150 - Shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>`

    let generate = document.querySelector('.content');
    let generate2 = document.querySelector('.button');
    generate.innerHTML = orderHTML ;
    generate2.innerHTML = `<button class="add">Change the product</button>`

    let generate3 = document.querySelector('.add');
    generate3.addEventListener('click' , () =>{
        removeFromCart(matchingProduct.productName);
        let container = document.querySelector(`.order-${productName}`);
        container.remove(); 
        window.location.href = 'home page.html';
    })

    document.querySelector('.close-button').addEventListener('click', () =>{
        removeFromCart(productName);
        let container = document.querySelector(`.order-${productName}`);
        container.remove();  
        generate2.innerHTML = `<button class="add">Add another product</button>`
        let generate3 = document.querySelector('.add');
        generate3.addEventListener('click' , () =>{
            window.location.href= 'home page.html';
        })
    });

let stock = document.querySelector('.stock');
let quanReq = document.querySelector('.quantityReq');
let measure = document.querySelector('.measure');
let save = document.querySelector('.save');
let name = document.querySelector('.Name');
save.addEventListener('click', () =>{
    if(Number(quanReq.value) > Number(stock.innerHTML) && quanReq.value !== ''){
        alert(`Stock is not available.\nSelect something below ${stock.innerHTML}${measure.innerHTML}`);
        quanReq.value = '';
    } 
    else if(quanReq.value !== ''){
        alert(`Order for ${quanReq.value}${measure.innerHTML} is placed.`);
    } 
    else{
        alert(`Enter the quantity of ${name.innerHTML} required.\nChoose something below ${stock.innerHTML}${measure.innerHTML}`);
    }
})
 
var today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 2);
export let formattedTomorrow = tomorrow.toISOString().split('T')[0];
let ship = document.querySelectorAll('.shipping2');
ship.forEach((text) =>{
    text.innerHTML = formattedTomorrow;
})

let date5 = new Date(today);
date5.setDate(today.getDate() + 5);
export let formatteddate5 = date5.toISOString().split('T')[0];
let ship1 = document.querySelectorAll('.shipping1');
ship1.forEach((text) =>{
    text.innerHTML = formatteddate5;
})

let date10 = new Date(today);
date10.setDate(today.getDate() + 10);
export let formattedday10 = date10.toISOString().split('T')[0];
let ship2 = document.querySelectorAll('.shipping');
ship2.forEach((text) =>{
    text.innerHTML = formattedday10;
})

console.log(items);











