import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    
    let totalPrice = 0;
    let totalShipping = 0
    let quantity = 0
    for(const product of cart){

        //condition 1
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // condition 1 condition 2 will display save result
        //condition 2
        //product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 10/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div >
             <h1 className="text-center underline">Order Summery</h1>
             <h2>Selected Item: {quantity}</h2>
             <h2>Total Price:$ {totalPrice}</h2>
             <h2>Total Shipping:$ {totalShipping} </h2>
             <h2>Total Tax:$ {tax.toFixed(2)}</h2>
             <h2>Grand Total:$ {grandTotal.toFixed(2)} </h2>
           
        </div>
    );
};

export default Cart;