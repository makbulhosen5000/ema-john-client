import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage,setCurrentPage] = useState(0)
    const [itemsPerPage,setItemPerPage] = useState(10);
    const {totalProducts} = useLoaderData();
    console.log("totalProducts", totalProducts);
    
    //const itemsPerPage = 10; //TODO:make it dynamic
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];
    console.log(totalProducts);
   
    const options = [5, 10, 15]; 
    const handleSelectChange = (event) =>{
          setItemPerPage(parseInt(event.target.value));
          setCurrentPage(0)
    }

    // useEffect(()=>{
    //     const loadData = async()=>{
    //         const res = await fetch("http://localhost:5000/products");
    //         const data = await res.json();
    //         setProducts(data);
    //     }
    //     loadData();
    // },[]);

    useEffect(() => {
      const loadData = async () => {
        const res = await fetch(
          `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
        );
        const data = await res.json();
        setProducts(data);
      };
      loadData();
    }, [currentPage, itemsPerPage]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        //step 1 get id of the added product
        for(const id in storedCart){
            const savedCart = [];
           // step 2 get product form products state by using id;
           const addedProduct = products.find(product=>product._id === id);
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
        let newCart = [];
        //const newCart = [...cart, product];
        // if product doesn't exist in the cart then set quantity = 1
        // if exist update quantity by 1 

        const exists = cart.find(pd=>pd._id === product._id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart,product];
        }else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd=>pd._id !== product._id);
            newCart = [...remaining,exists];
        }

        setCart(newCart);
        addToDb(product._id);

    }
    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
      <>
        <div className="sm:flex-1 md:flex lg:flex">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-20">
            {products.map((product) => (
              <Product
                product={product}
                handleAddToCart={handleAddToCart}
                key={product._id}
              />
            ))}
          </div>
          <div className="w-full sm:h-screen md:h-screen lg:h-screen  bg-warning shadow-xl sticky top-0 ">
            <div className="card-body ">
              <Cart cart={cart} handleClearCart={handleClearCart} />
              <Link to="/order">
                <button className="bg-green-600 p-2 rounded-md">
                  Review Order
                </button>
              </Link>
            </div>
          </div>
        </div>
        <p>
          Current Page:{currentPage} and items per page: {itemsPerPage}
        </p>
        <div className="pagination">
          {pageNumbers.map((number) => (
            <button
              onClick={() => setCurrentPage(number)}
              className={
                currentPage === number ? "btn bg-black" : "btn bg-gray-400"
              }
              key={number}
            >
              {number}
            </button>
          ))}
          <select value={itemsPerPage} onChange={handleSelectChange}>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </>
    );
};

export default Shop;