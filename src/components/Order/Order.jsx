import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";


const Order = () => {
    const saveCart = useLoaderData();
    const [cart,setCart] = useState(saveCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product=>product._id !== id);
        console.log(cart)
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
  return (
    <div className="grid grid-cols-2 text-center top-0">
      <div>
        <h1>Order Items: {cart.length}</h1>
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product._id}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="bg-yellow-500  sticky">
        <Cart cart={cart} handleClearCart={handleClearCart} />
        <Link to="/order-checkout">
          <button className="bg-yellow-100 p-2 my-2 rounded-md">Order Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
