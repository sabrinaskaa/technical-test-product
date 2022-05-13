import React, { useEffect } from "react";
import "./styles.css";
import { useAppState } from "../../contexts/appState";
import {
  deleteProduct,
  detailProduct,
  getProductList,
} from "../../actions/productActions";

import ListProductCard from "./listproductcard";

function ListProduct() {
  const [state, dispatch] = useAppState();
  const {
    getProductResult,
    getProductLoading,
    getProductError,
    deleteProductResult,
  } = state;

  useEffect(() => {
    getProductList(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (deleteProductResult) {
      getProductList(dispatch);
    }
  }, [dispatch, deleteProductResult]);

  return (
    <div className="AllProductListWrap">
      {getProductResult ? (
        getProductResult.map((product, index) => {
          return (
            <div className="productListWrap" key={product.id}>
              <ListProductCard data={product} key={index} />
              <div className="buttonWrap">
                <button
                  className="displaybtn redbtn"
                  onClick={() => deleteProduct(dispatch, product.id)}
                >
                  Delete
                </button>
                <button
                  className="displaybtn bluebtn"
                  onClick={() => detailProduct(dispatch, product)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })
      ) : getProductLoading ? (
        <p>Loading . . .</p>
      ) : (
        <p>{getProductError ? getProductError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListProduct;
