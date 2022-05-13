import productReducer from "./product";

const initialState = {
  getProductResult: false,
  getProductLoading: false,
  getProductError: false,

  addProductResult: false,
  addProductLoading: false,
  addProductError: false,

  deleteProductResult: false,
  deleteProductLoading: false,
  deleteProductError: false,

  detailProductResult: false,

  updateProductResult: false,
  updateProductLoading: false,
  updateProductError: false,
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  productReducer,
});

export { initialState, combineReducers, appReducers };
