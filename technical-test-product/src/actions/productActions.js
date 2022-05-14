import axios from "axios";

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const getProductList = (dispatch) => {
  //loading
  dispatch({
    type: GET_PRODUCT_LIST,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: "http://localhost:3000/products",
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: GET_PRODUCT_LIST,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCT_LIST,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const addProduct = (dispatch, data) => {
  //loading
  dispatch({
    type: ADD_PRODUCT,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "POST",
    url: "http://localhost:3000/products",
    timeout: 120000,
    data: data,
  })
    .then((response) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const deleteProduct = (dispatch, id) => {
  //loading
  dispatch({
    type: DELETE_PRODUCT,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "DELETE",
    url: "http://localhost:3000/products/" + id,
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const detailProduct = (dispatch, data) => {
  dispatch({
    type: DETAIL_PRODUCT,
    payload: {
      data: data,
    },
  });
};

export const updateProduct = (dispatch, data) => {
  //loading
  dispatch({
    type: UPDATE_PRODUCT,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "PUT",
    url: "http://localhost:3000/products/" + data.id,
    timeout: 120000,
    data: data,
  })
    .then((response) => {
      dispatch({
        type: UPDATE_PRODUCT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_PRODUCT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
