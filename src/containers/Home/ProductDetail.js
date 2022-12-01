import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedProduct } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log("jehjh", productId);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);
  return <div></div>;
};
export default ProductDetail;
