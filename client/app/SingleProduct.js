import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../features/displaySlice/singleProductSlice";

const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const singleProduct = useSelector(selectSingleProduct);
  const { Name, Desc, Price, imageUrl } = singleProduct;

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);
  console.log(imageUrl);

  return (
    <div>
      <h2>{Name}</h2>
      <p>{Desc}</p>
      <p>{Price}</p>
      <img src={imageUrl}></img>
    </div>
  );
};

export default SingleProduct;
