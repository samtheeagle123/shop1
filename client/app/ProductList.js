import Button from '@mui/material/Button'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsAsync,
  selectProducts,
  createAddProductAsync,
} from "../features/displaySlice/productSlice.js";
import { BsFillCartPlusFill } from 'react-icons/bs';

import '../features/style/ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const handleAddToCart = (productId, orderId) => {
    dispatch(createAddProductAsync({ productId}));
  };

  return (
        <div className="wrapper">
          {products.map(product => (
            <div key={product.id} className='card'>
              <h3>{product.Name}</h3><span></span>
              <p className="price">{product.Price}</p>
              {/* <p className='description'>{product.Desc}</p> */}
              <img className='product-img' src={product.imageUrl}></img>
              <br></br>
              <Button onClick={() => handleAddToCart(product.id)}
                variant="outlined">
                <BsFillCartPlusFill />
              </Button>
            </div>
          ))}
        </div>
  );
}

export default ProductList;


//