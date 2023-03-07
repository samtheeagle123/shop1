import Button from '@mui/material/Button'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsAsync,
  selectProducts,
  addToCart,
} from "../features/displaySlice/productSlice.js";
import { BsFillCartPlusFill } from 'react-icons/bs';
import Stack from '@mui/material/Stack';
import '../features/style/ProductList.css';
import { Link } from "react-router-dom";
import { GiMagnifyingGlass } from 'react-icons/gi';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
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
              <Stack direction='row'>
              <Button onClick={() => handleAddToCart(product.id)}
                variant="outlined">
                <BsFillCartPlusFill />
              </Button>
              <Button variant="outlined">
              <GiMagnifyingGlass><Link to={`/products/${product.id}`}></Link></GiMagnifyingGlass>
              </Button>
              </Stack>
            </div>
          ))}
        </div>
  );
}

export default ProductList;


//