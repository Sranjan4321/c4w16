import { SUCCESS } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SUCCESS:
      return {
        ...state,
        data: [...payload],
      };
    default:
      return state;
  }
};
export { reducer };
