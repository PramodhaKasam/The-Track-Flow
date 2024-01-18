import {removeFromCart , items , saveToStorage} from './products.js'




 export  let products =[{
                productName : 'Rice-flour',
                productCost : '45',
                stock : '50' ,
                measure : 'kg',
                productId : '11029022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Sugar',
                productCost : '40',
                stock : '102',
                measure : 'kg',
                productId : '12119022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            },{
                productName : 'Salt',
                productCost : '38',
                stock : '100',
                measure : 'kg',
                productId : '13456098',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Turmeric',
                productCost : '70',
                stock : '10',
                measure : 'kg',
                productId : '15678908',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Apples',
                productCost : '120',
                stock : '10',
                measure : 'kg',
                productId : '10034567',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Sesame',
                productCost : '79',
                stock : '5',
                measure : 'kg',
                productId : '11034522',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Groundnuts',
                productCost : '180',
                stock : '53',
                measure : 'kg',
                productId : '23456780',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Jaggery',
                productCost : '115',
                stock : '41',
                measure : 'kg',
                productId : '12456786',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'rice',
                productCost : '09',
                stock : '22',
                measure : 'kg',
                productId : '22102922',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Cashew',
                productCost : '90',
                stock : '2',
                measure : 'kg',
                productId : '00129022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Honey',
                productCost : '200',
                stock : '7',
                measure : 'kg',
                productId : '19922778',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Fenugreek',
                productCost : '70',
                stock : '2.5',
                measure : 'kg',
                productId : '12367678',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Wheat',
                productCost : '20',
                stock : '29',
                measure : 'kg',
                productId : '11129022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Vermicelli',
                productCost : '50',
                stock : '39',
                measure : 'kg',
                productId : '12620098',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Almond',
                productCost : '130',
                stock : '5',
                measure : 'kg',
                productId : '24567834',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            },{
                productName : 'Olive oil',
                productCost : '90',
                stock : '20',
                measure : 'Lt',
                productId : '26029022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Walnut',
                productCost : '160',
                stock : '3',
                measure : 'kg',
                productId : '81199022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Toor dal',
                productCost : '55',
                stock : '53',
                measure : 'kg',
                productId : '90029022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Bread',
                productCost : '5',
                stock : '100',
                measure : 'loaf',
                productId : '90000022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Garlic',
                productCost : '120',
                stock : '52',
                measure : 'kg',
                productId : '71029022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'

            }, {
                productName : 'Ginger',
                productCost : '100',
                stock : '7',
                measure : 'kg',
                productId : '19809022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Corn',
                productCost : '80',
                stock : '15',
                measure : 'kg',
                productId : '55629022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            },{
                productName : 'Millet',
                productCost : '60',
                stock : '13',
                measure : 'kg',
                productId : '09929022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }, {
                productName : 'Coconuts',
                productCost : '30',
                stock : '163',
                measure : 'number',
                productId : '31909022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            },{
                productName : 'Pepper',
                productCost : '60',
                stock : '6.6',
                measure : 'kg',
                productId : '44429022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            },{
                productName : 'Egg',
                productCost : '60',
                stock : '43',
                measure : 'dozen',
                productId : '69829022',
                deliveryDate : '19/01/2024',
                destination : 'Kaatmandu'
            }
 ]


let matchingProduct;
let orderHTML;
items.forEach((item) =>{
   
    const productName = item.productName;
       
    
    let matchingProduct;

    products.forEach((product) =>{
        if(product.productName === productName){
            matchingProduct = product;
        }
    })
    orderHTML +=  ` <div class="order order-${matchingProduct.productName}">
                           
                            <button class="close-button" 
                             data-product-name="${matchingProduct.productName}" >
                                <span class="tooltip">Remove</span>
                                <img class="close"src="10263335.png">
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
    generate.innerHTML = orderHTML  ;
    generate2.innerHTML = `<button class="add">Change the product</button>`
    let generate3 = document.querySelector('.add');
    generate3.addEventListener('click' , () =>{
        removeFromCart(matchingProduct.productName);
        let container = document.querySelector(`.order-${productName}`);
        container.remove(); 
        window.location.href = 'home page.html';
    })

    
   
   
   

    document.querySelectorAll('.close-button')
    .forEach((close) =>{
        close.addEventListener('click', () =>{
        let productName = close.dataset.productName;
        removeFromCart(productName);
        let container = document.querySelector(`.order-${productName}`);
        container.remove();  
        
        generate2.innerHTML = `<button class="add">Add another product</button>`
        let generate3 = document.querySelector('.add');
        generate3.addEventListener('click' , () =>{
            window.location.href= 'home page.html';
        })


        });
    });
            
 
})

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
var date = (today.getDate()+ 2)+ '/'+ (today.getMonth()+ 1)+ '/'+ today.getFullYear();
let ship = document.querySelectorAll('.shipping2');
ship.forEach((text) =>{
    text.innerHTML = date;
})

var date5 = (today.getDate()+ 5)+ '/'+ (today.getMonth()+ 1)+ '/'+ today.getFullYear();
let ship1 = document.querySelectorAll('.shipping1');
ship1.forEach((text) =>{
    text.innerHTML = date5;
})

var date10 = (today.getDate()+ 8)+ '/'+ (today.getMonth()+ 1)+ '/'+ today.getFullYear();
let ship2 = document.querySelectorAll('.shipping');
ship2.forEach((text) =>{
    text.innerHTML = date10;
})

console.log(items);











