import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Product = (props) => {
    
    const {img,name,price,quantity,seller,ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="card-title">Price:$ {price} </h2>
                <h2 className="card-title">Rating : {ratings} </h2>
                <h2 className="card-title">Quantity : {quantity} </h2>
                <h2 className="card-title">Manufacturer : {seller} </h2>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className="btn btn-success w-full">Buy Now <span className=' ml-1 text-red-50'><FaShoppingCart/></span></button>
        </div>
    );
};

export default Product;