export let items = JSON.parse(sessionStorage.getItem('items'));
if(!items){
    items = [
        
     ]
}

export function saveToStorage(){
    sessionStorage.setItem('items', JSON.stringify(items));
}

var today = new Date();
var date = (today.getDate()+ 1)+ '/'+ (today.getMonth()+ 1)+ '/'+ today.getFullYear();

document.querySelectorAll('.js-add')
    .forEach((button) => {
        button.addEventListener('click', () =>{
            const productName = button.dataset.productName;
            if(items.length == 0)
            {
                items.push({
                    productName : productName , 
                    quantity : 1 ,
                    deliveryDate : 'Not Choosed',
                    destination : 'Not Choosed',
                    shippingDate: date,
                    stock: 'Not Choosed'
                });
                console.log(items);
                saveToStorage();
                alert(`The product ${productName} is added to the cart!!`);
            }
            else{
                alert('You can add only one product at a time!!');
            }
        })  
    })

console.log(items.length);

export function removeFromCart(productName){
    items = [];
    saveToStorage();
}

    
