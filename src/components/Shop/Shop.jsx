import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

    useEffect(()=>{
        const storedCart = getShoppingCart();
        //step 1 get id of the added product
        for(const id in storedCart){
            const savedCart = [];
           // step 2 get product form products state by using id;
           const addedProduct = products.find(product=>product.id === id);
           if(addedProduct){
            //step 3 add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //step 4 add the added product to the save cart cart
            savedCart.push(addedProduct);
           }
           //step 5 set he cart
           setCart(savedCart);
        }

    },[products]);
   
    //add to cart
    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

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
                <div className="w-full sm:h-screen md:h-screen lg:h-screen  bg-warning shadow-xl sticky top-0 ">
                    <div className="card-body ">
                        <Cart cart={cart} />
                    </div>
                </div>
            </div>

          );
};

export default Shop;