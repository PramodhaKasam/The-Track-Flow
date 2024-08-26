import {items} from './products.js'
import { products } from './array.js';

let section;
let matchedProduct;
let doubleMatchedProduct;
let productId = document.querySelector('.productId');
let details = document.querySelector('.details');
let track = document.querySelector('.track');

let trackingNumber= Math.floor(Math.random()* 100);
track.addEventListener('click' , () =>{
    products.forEach((product) =>{
        if(product.productId === productId.value){
            matchedProduct = product;
            items.forEach((item) =>{
                if(item.productName === matchedProduct.productName){
                    doubleMatchedProduct = matchedProduct;
                    section +=
                                `<div class="shipment">
                                    <button class="tag-1">Shipment Summary</button>
                                    <div class="q-a">
                                        <div class="q">
                                            <p class="q-1">Tracking No.</p>
                                            <p class="q-2">Product code.</p>
                                            <p class="q-3">shipping Date.</p>
                                        </div>
                                        <div class="a">
                                            <p class="a-1">${trackingNumber}</p>
                                            <p class="a-2">${productId.value}</p>
                                            <p class="a-3 " id="js-a-3">${item.shippingDate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="shipment">
                                    <button class="tag-1">Shipment Details</button>
                                    <div class="q-a">
                                        <div class="q">
                                            <p class="q-1">Origin</p>
                                            <p class="q-2">Package contents</p>
                                            <p class="q-3">Destination</p>
                                        </div>
                                        <div class="a">
                                            <p class="a-1">${doubleMatchedProduct.origin}</p>
                                            <p class="a-2">${doubleMatchedProduct.productName}</p>
                                            <p class="a-3">${item.destination}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="shipment1">
                                    <button class="tag-1"> Multi-piece Shipment Details</button>
                                    <div class="q-a">
                                        <div class="q">
                                            <p class="q-1">Delivery Status</p>
                                            <p class="q-2">Date to be delivered </p>
                                        </div>
                                        <div class="a">
                                            <p class="a1 js-a1">Undelivered</p>
                                            <p class="a-2">${item.deliveryDate}</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="question">Did u receive the shipment?</p>
                                <input type="radio" class="yesCheck" name="x">
                                <label class="yes">Yes</label>
                                <input type="radio" class="noCheck" name="x">
                                <label class="no">No</label>`
                }
            })
        }
    })
    console.log(doubleMatchedProduct);

    if(doubleMatchedProduct && productId.value !== ''){
        details.innerHTML = section;
        track.classList.add('tracked');
    }
    else if(!doubleMatchedProduct && matchedProduct){
        alert('An order for the product is not placed');
        productId.value ='';
    }
    else if(productId.value == ''){
        alert('Enter the product Id or code');
    }
    else{
        alert('Enter a valid product Id or code');
        productId.value = '';
    }
})

console.log(items);






