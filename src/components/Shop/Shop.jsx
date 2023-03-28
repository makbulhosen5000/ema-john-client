import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data);
        }
        loadData();
    },[]);
   
    //add to cart
    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);

    }

    return (
           <div className='sm:flex-1 md:flex lg:flex'>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-20'>
                    {
                    products.map((product)=> <Product
                    product={product}
                    handleAddToCart={handleAddToCart}
                    key={product.id} />)
                    }
                </div>
                <div className="w-full sm:h-screen md:h-screen lg:h-screen  bg-warning shadow-xl  ">
                    <div className="card-body ">
                        <Cart cart={cart} />
                    </div>
                </div>
            </div>

          );
};

export default Shop;