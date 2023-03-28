import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    
    let total = 0;
    let totalShipping = 0
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    return (
        <div>
             <h1 className="text-center underline">Order Summery</h1>
             <h2>Selected Item: {cart.length}</h2>
             <h2>Total Price:$ {total}</h2>
             <h2>Total Shipping:$ {totalShipping} </h2>
             <h2>Total Tax: </h2>
             <h2>Grand Total: </h2>
           
        </div>
    );
};

export default Cart;