import React, { useEffect, useState } from "react";
import "./styles.css";
import { useAppState } from "../../contexts/appState";
import {
  addProduct,
  getProductList,
  updateProduct,
} from "../../actions/productActions";

function FormProduct() {
  const [image, setImage] = useState("");
  const [nama, setNama] = useState("");
  const [brand, setBrand] = useState("");
  const [penyimpanan, setPenyimpanan] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [harga, setHarga] = useState("");
  const [id, setId] = useState("");

  const [state, dispatch] = useAppState();
  const { addProductResult, detailProductResult, updateProductResult } = state;

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("1. Masuk Handle Submit");
    if (id) {
      //update
      updateProduct(dispatch, {
        id: id,
        image: image,
        nama: nama,
        brand: brand,
        penyimpanan: penyimpanan,
        ukuran: ukuran,
        harga: harga,
      });
    } else {
      //add
      addProduct(dispatch, {
        image: image,
        nama: nama,
        brand: brand,
        penyimpanan: penyimpanan,
        ukuran: ukuran,
        harga: harga,
      });
    }
  };

  //add product
  useEffect(() => {
    if (addProductResult) {
      getProductList(dispatch);
      setImage("");
      setNama("");
      setBrand("");
      setPenyimpanan("");
      setUkuran("");
      setHarga("");
      setId("");
    }
  }, [addProductResult, dispatch]);

  //detail product
  useEffect(() => {
    if (detailProductResult) {
      setImage(detailProductResult.image);
      setNama(detailProductResult.nama);
      setBrand(detailProductResult.brand);
      setPenyimpanan(detailProductResult.penyimpanan);
      setUkuran(detailProductResult.ukuran);
      setHarga(detailProductResult.harga);
      setId(detailProductResult.id);
    }
  }, [detailProductResult]);

  //update product
  useEffect(() => {
    if (updateProductResult) {
      console.log("5. Get Product List");
      getProductList(dispatch);
      setImage("");
      setNama("");
      setBrand("");
      setPenyimpanan("");
      setUkuran("");
      setHarga("");
      setId("");
    }
  }, [updateProductResult, dispatch]);

  return (
    <div className="formProductWrap">
      <h4 className="heading">{id ? "Edit Product" : "Add Product"}</h4>
      <form className="formListWrap" onSubmit={(event) => handleSubmit(event)}>
        <div className="formList">
          <div className="inputWrap">
            <label className="label">Masukkan URL Image.</label>
            <input
              className="input"
              type="text"
              name="image"
              placeholder="Image . . ."
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>

          <div className="inputWrap">
            <label className="label">Masukkan Nama Product.</label>
            <input
              className="input"
              type="text"
              name="nama"
              placeholder="Nama . . ."
              value={nama}
              onChange={(event) => setNama(event.target.value)}
            />
          </div>

          <div className="inputWrap">
            <label className="label">Masukkan Brand Product.</label>
            <input
              className="input"
              type="text"
              name="brand"
              placeholder="Brand . . ."
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            />
          </div>

          <div className="inputWrap">
            <label className="label">Masukkan Penyimpanan Product.</label>
            <input
              className="input"
              type="text"
              name="penyimpanan"
              placeholder="Penyimpanan . . ."
              value={penyimpanan}
              onChange={(event) => setPenyimpanan(event.target.value)}
            />
          </div>

          <div className="inputWrap">
            <label className="label">Masukkan Ukuran Product.</label>
            <input
              className="input"
              type="text"
              name="ukuran"
              placeholder="Ukuran . . ."
              value={ukuran}
              onChange={(event) => setUkuran(event.target.value)}
            />
          </div>

          <div className="inputWrap">
            <label className="label">Masukkan Harga Product.</label>
            <input
              className="input"
              type="text"
              name="harga"
              placeholder="Harga . . ."
              value={harga}
              onChange={(event) => setHarga(event.target.value)}
            />
          </div>
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormProduct;
