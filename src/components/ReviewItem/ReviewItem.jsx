import React from 'react';
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";
import { FaTrashAlt } from "react-icons/fa";
const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, name, price, quantity, shipping, img } = product;
  return (
    <div className="flex justify-between mx-20 border-2 bg-slate-400 p-3 rounded-md">
      <div className="text-start">
        <img src={img} className="img-fluid w-9" alt="" />
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>quantity: {quantity}</p>
        <p>shipping:{shipping}</p>
      </div>
      <button onClick={()=>handleRemoveFromCart(id)}>
        <ArchiveBoxXMarkIcon className="w-8" />
      </button>
    </div>
  );
};

export default ReviewItem;