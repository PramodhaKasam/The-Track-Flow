import {items} from './products.js'


let products =[{
    productName : 'Rice-flour',
    productCost : '45',
    stock : '50' ,
    measure : 'kg',
    productId : '11029022' ,
    origin : 'Vijayawada'
}, {
    productName : 'Sugar',
    productCost : '40',
    stock : '102',
    measure : 'kg',
    productId : '12119022',
    origin : 'Kakinada'
},{
    productName : 'Salt',
    productCost : '38',
    stock : '100',
    measure : 'kg',
    productId : '13456098',
    origin : 'Vijayawada'
}, {
    productName : 'Turmeric',
    productCost : '70',
    stock : '10',
    measure : 'kg',
    productId : '15678908',
    origin : 'Guntur'
}, {
    productName : 'Apples',
    productCost : '120',
    stock : '10',
    measure : 'kg',
    productId : '10034567',
    origin : 'Vijayawada'
}, {
    productName : 'Sesame',
    productCost : '79',
    stock : '5',
    measure : 'kg',
    productId : '11034522',
    origin : 'Guntur'
}, {
    productName : 'Groundnuts',
    productCost : '180',
    stock : '53',
    measure : 'kg',
    productId : '23456780',
    origin : 'Kakinada'
}, {
    productName : 'Jaggery',
    productCost : '115',
    stock : '41',
    measure : 'kg',
    productId : '12456786',
    origin : 'Kakinada'
}, {
    productName : 'rice',
    productCost : '09',
    stock : '22',
    measure : 'kg',
    productId : '22102922',
    origin : 'Nellore'
}, {
    productName : 'Cashew',
    productCost : '90',
    stock : '2',
    measure : 'kg',
    productId : '00129022',
    origin : 'Palakol'
}, {
    productName : 'Honey',
    productCost : '200',
    stock : '7',
    measure : 'kg',
    productId : '19922778',
    origin : 'Nellore'
}, {
    productName : 'Fenugreek',
    productCost : '70',
    stock : '2.5',
    measure : 'kg',
    productId : '12367678',
    origin : 'Kurnool'
}, {
    productName : 'Wheat',
    productCost : '20',
    stock : '29',
    measure : 'kg',
    productId : '11129022',
    origin : 'Palakol'
}, {
    productName : 'Vermicelli',
    productCost : '50',
    stock : '39',
    measure : 'kg',
    productId : '12620098',
    origin : 'Kurnool'
}, {
    productName : 'Almond',
    productCost : '130',
    stock : '5',
    measure : 'kg',
    productId : '24567834',
    origin : 'Karimnagar'
},{
    productName : 'Olive oil',
    productCost : '90',
    stock : '20',
    measure : 'Lt',
    productId : '26029022',
    origin : 'Karimnagar'
}, {
    productName : 'Walnut',
    productCost : '160',
    stock : '3',
    measure : 'kg',
    productId : '81199022',
    origin : 'Karimangar'
}, {
    productName : 'Toor dal',
    productCost : '55',
    stock : '53',
    measure : 'kg',
    productId : '90029022',
    origin : 'Rajahmundry'
}, {
    productName : 'Bread',
    productCost : '55',
    stock : '100',
    measure : 'loaf',
    productId : '90000022',
    origin : 'Mancherial'
}, {
    productName : 'Garlic',
    productCost : '120',
    stock : '52',
    measure : 'kg',
    productId : '71029022',
    origin : 'Nalgonda'

}, {
    productName : 'Ginger',
    productCost : '100',
    stock : '7',
    measure : 'kg',
    productId : '19809022',
    origin : 'Suryapet'
}, {
    productName : 'Corn',
    productCost : '80',
    stock : '15',
    measure : 'kg',
    productId : '55629022',
    origin : 'Warangal'
},{
    productName : 'Millet',
    productCost : '60',
    stock : '13',
    measure : 'kg',
    productId : '09929022',
    origin : 'Warangal'
}, {
    productName : 'Coconuts',
    productCost : '30',
    stock : '163',
    measure : 'number',
    productId : '31909022',
    origin : 'Warangal'
},{
    productName : 'Pepper',
    productCost : '60',
    stock : '6.6',
    measure : 'kg',
    productId : '44429022',
    origin : 'Vishakhapatnam'
},{
    productName : 'Egg',
    productCost : '60',
    stock : '43',
    measure : 'dozen',
    productId : '69829022',
    origin : 'vishakhapatnam'
}
]
let section;
let matchedProduct;
let doubleMatchedProduct;
let productId = document.querySelector('.productId');
let details = document.querySelector('.details');
let track = document.querySelector('.track');

let trackingNumber= Math.floor(Math.random()* 100);
document.querySelector('.track')
.addEventListener('click' , () =>{
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
let dateDelivery;
let nameProduct;
items.forEach((item) =>{
    dateDelivery = item.deliveryDate ;
    nameProduct = item.productName;
})

console.log(items);






