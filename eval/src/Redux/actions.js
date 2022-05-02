// use axios for api call
import axios from "axios";
import { SUCCESS } from "./actionTypes";

function getProductsData(payload) {
  return {
    type: SUCCESS,
    payload,
  };
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
