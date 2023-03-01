import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsAsync,
  selectProducts,
} from "../features/displaySlice/productSlice.js";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.Name}</h3>
          <p>{product.Desc}</p>
          <p>{product.Price}</p>
          <img src={product.imageUrl}></img>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
