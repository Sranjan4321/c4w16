import React, { useEffect } from "react";
import { Select, Grid } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../Redux/actions";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.reducer);
  console.log(data);
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    fetch(`https://movie-fake-server.herokuapp.com/products`)
      .then((res) => res.json())
      .then((d) => dispatch(getProductsData(d)));
  }, []);
  const handleSort = (e) => {
    dispatch(getProductsData(data.sort((a, b) => a - b)));
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {data.map((elem) => (
          <ProductCard key={elem.id} item={elem} />
        ))}
      </Grid>
    </>
  );
};
