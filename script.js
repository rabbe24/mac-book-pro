
function extraMemoryCharge(id){
    document.getElementById(id).addEventListener('click', function() {
    clickBtnMemory(id);
    totalPrice();

});
}

extraMemoryCharge('memory_8_gb');
extraMemoryCharge('memory_16_gb');

function extraStorageCharge(id){
    document.getElementById(id).addEventListener('click', function() {
        clickBtnStorage(id);       
        totalPrice();
        
    });
}

extraStorageCharge('storage_256_gb');
extraStorageCharge('storage_512_gb');
extraStorageCharge('storage_1_tb');

function clickBtnMemory(click){
    let price;
    
     if (click == 'memory_8_gb') {
        price = 0;
    }
     if (click == 'memory_16_gb') {
        price = 100;
    }
    return document.getElementById('extra_memory').textContent = price;
}

function clickBtnStorage(click){
    let price;

    if (click == 'storage_256_gb') {
        price = 0;
    }
    if (click == 'storage_512_gb') {
        price = 50;
    }
    if (click == 'storage_1_tb') {
        price = 100;
    }
    return document.getElementById('extra_storage').textContent = price;
}


function extraDeliveryCharge(event){
    document.getElementById(event).addEventListener('click', function(){
    clickBtnDelivery(event);
    totalPrice();

});
}

extraDeliveryCharge('delivery_free');
extraDeliveryCharge('delivery_20');

function clickBtnDelivery(click){
    let price;
    if (click == 'delivery_free') {
        price = 0;
    }
    if (click == 'delivery_20') {
        price = 50;
    }
    return document.getElementById('delivery_charge').textContent = price;
}

function totalPrice(){
    const bestPrice = parseInt(document.getElementById('best_price').textContent);
    const extraMemory = parseInt(document.getElementById('extra_memory').textContent);
    const extraStorage = parseInt(document.getElementById('extra_storage').textContent);
    const deliveryCharge = parseInt(document.getElementById('delivery_charge').textContent);
    const totalPrice = bestPrice + extraMemory + extraStorage + deliveryCharge; 
    document.getElementById('total_price').textContent = totalPrice;
}

// Promo Function 

document.getElementById('promo__btn').addEventListener('click', function(){
    const totalPrice = parseInt(document.getElementById('total_price').textContent);
    const finalTotal = document.getElementById('final_total').textContent;
    const promoCode = document.getElementById('promo_code').value;
if (promoCode == 'mrm') {
   const total = totalPrice * 0.2;
    document.getElementById('final_total').textContent = totalPrice - total;
    document.getElementById('promo_code').value = '';
}
});





// function promoCodeBtn(){

// }


// document.getElementById('memory_8_gb').addEventListener('click', function(){
// // console.log('click');
// // document.getElementById('best_price').textContent = 0;

//     clickBtnMemory('memory_8_gb');
//     totalPrice();

// });

// document.getElementById('memory_16_gb').addEventListener('click', function() {
//     // console.log('click');
//     // document.getElementById('best_price').textContent = 10;

//     clickBtnMemory('memory_16_gb');
//     totalPrice();
// });

// document.getElementById('storage_256_gb').addEventListener('click', function() {
//     // document.getElementById('best_price').textContent = 0;
//     clickBtnStorage('storage_256_gb');
//     totalPrice();

// });

// document.getElementById('storage_512_gb').addEventListener('click', function() {

//     clickBtnStorage('storage_512_gb');
//     totalPrice();
    
// });

// document.getElementById('storage_1_tb').addEventListener('click', function() {
//     clickBtnStorage('storage_1_tb');
//     totalPrice();
  

// });

// extraMemoryCharge('storage_256_gb');



// delivery_free

// document.getElementById('delivery_free').addEventListener('click', function(){

//     clickBtnDelivery('delivery_free');
//     totalPrice();
// });

// delivery_20
// document.getElementById('delivery_20').addEventListener('click', function(){
//     clickBtnDelivery('delivery_20');
//     totalPrice();

// });
