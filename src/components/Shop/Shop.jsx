import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data);
            console.log(data);
        }
        loadData();
    },[]);
   
    //add to cart
    const handleAddToCart = (product) =>{
       const newCart = [...cart,product];
       setCart(newCart);
    }

    return (
           <div className='sm:flex-1 md:flex lg:flex'>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-20'>
                    {
                    products.map((product)=> <Product
                    product={product}
                    handleAddToCart={handleAddToCart}
                    key={product.key} />)
                    }
                </div>
                <div className="w-full sm:h-screen md:h-screen lg:h-screen  bg-warning shadow-xl">
                    <div className="card-body">
                        <h1 className="text-center underline">Order Summery</h1>
                        <h2>Selected Item: {cart.length}</h2>
                    </div>
                </div>
            </div>

          );
};

export default Shop;