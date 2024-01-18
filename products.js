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
            let matchingItem;
            if(items.length === 0){
                items.forEach((item) =>{
                    if(productName === item.productName){
                       matchingItem =  item ;
                    }
                   
                });
    
                if(matchingItem){
                    matchingItem.quantity = 1;
                }else{
                    items.push({
                        productName : productName , 
                        quantity : 1 ,
                        deliveryDate : '19/01/2024',
                        destination : 'Karimnagar',
                        shippingDate: date
                    });
                }
    
                console.log(items);
                console.log(items.length);
    
                saveToStorage();
                if(button.innerHTML === 'add'){
                    button.innerHTML = 'added';
                    button.classList.add('added');
                }


                

            
            }
            else{
                alert('You can add only one product at a time');
            }
                
            

            
            

            
        })  
    })


console.log(items.length);

let newItems = [];
export function removeFromCart(productName){
    
        items.forEach((item) =>{
            if(item.productName !== productName){
                newItems.push(item);
            }
        });
    items = newItems;
    
    saveToStorage();
    
}

   
function updateDeliveryOption(productName, delivryOptionName) {

    let matchingItem;

    items.forEach((item) =>{
        if(productName === item.productName){
            matchingItem = item;
        }
    });


}
    
