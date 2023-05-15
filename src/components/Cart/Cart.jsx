import React from 'react';
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

const Cart = ({ cart, handleClearCart, children }) => {
  console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
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
  const tax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
   
  return (
    <div>
      <h1 className="text-center underline">Order Summery</h1>
      <h2>Selected Item: {quantity}</h2>
      <h2>Total Price:$ {totalPrice}</h2>
      <h2>Total Shipping:$ {totalShipping} </h2>
      <h2>Total Tax:$ {tax.toFixed(2)}</h2>
      <h2>Grand Total:$ {grandTotal.toFixed(2)} </h2>
      <button
        onClick={handleClearCart}
        className="w-[50%]  p-2 bg-slate-200 flex justify-between"
      >
        <span className="text-2xl">Clear Cart</span>
        <ArchiveBoxXMarkIcon className="w-8" />
      </button>
      {children}
      
    </div>
  );
};

export default Cart;