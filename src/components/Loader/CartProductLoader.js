import { getShoppingCart } from "../../utilities/fakedb";

const CartProductLoader = async() => {
    const res = await fetch('http://localhost:5000/products');
    const products = await res.json();
    //http://localhost:5000/products?page=0&limit=1000

    // if cart data is in database always have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for(const id in storedCart){
        const addedProduct = products.find(pd=>pd._id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity= quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
};

export default CartProductLoader;