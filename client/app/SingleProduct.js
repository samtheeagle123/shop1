import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../features/displaySlice/singleProductSlice";

const SingleProductList = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  const singleProduct = useSelector(selectSingleProduct);

  return (
    <div>
      <p>hi</p>
      <h1>Product name: {singleProduct.name}</h1>
      <h3>Price: {singleProduct.price}</h3>
      <h3>Description: {singleProduct.desc}</h3>
      <img src={singleProduct.imageURL}></img>
    </div>
  );
};

export default SingleProductList;
