import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
    const saveCart = useLoaderData();
    const [cart,setCart] = useState(saveCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product=>product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
  return (
    <div className="grid grid-cols-2 text-center top-0">
      <div>
        <h1>Order Items: {cart.length}</h1>
        {
        cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))
        }
      </div>
      <div className="bg-yellow-500 sticky">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;
