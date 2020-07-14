import React, { useEffect, useState } from 'react';

import './Shop.scss';
import fakeData from '../../assets/fakeData';
import Product from '../../components/Product/Product';
import Cart from '../../components/Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        // console.log("Product Added", newCart);
    };

    useEffect(() => {
        const allData = fakeData;
        const first10 = allData.slice(0, 10);
        setProducts(first10);
    }, []);
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map((product, key) => <Product
                        key={key}
                        product={product}
                        handleAddProduct={handleAddProduct}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}  ></Cart>
            </div>

        </div>
    );
};

export default Shop;