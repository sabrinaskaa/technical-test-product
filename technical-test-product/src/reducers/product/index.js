import {
  GET_PRODUCT_LIST,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  DETAIL_PRODUCT,
  UPDATE_PRODUCT,
} from "../../actions/productActions";

const product = (state, action) => {
  const { type } = action;
  switch (type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        getProductResult: action.payload.data,
        getProductLoading: action.payload.loading,
        getProductError: action.payload.errorMessage,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        addProductResult: action.payload.data,
        addProductLoading: action.payload.loading,
        addProductError: action.payload.errorMessage,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProductResult: action.payload.data,
        deleteProductLoading: action.payload.loading,
        deleteProductError: action.payload.errorMessage,
      };

    case DETAIL_PRODUCT:
      return {
        ...state,
        detailProductResult: action.payload.data,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProductResult: action.payload.data,
        updateProductLoading: action.payload.loading,
        updateProductError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default product;
