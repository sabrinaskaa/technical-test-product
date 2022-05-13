import React, { useState } from "react";
import { Modal, ModalContent } from "./Modal";
import NumberFormat from "react-number-format";

export default function ListProductCard(props) {
  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);

  return (
    <div
      style={{
        width: "fit-content",
      }}
    >
      <Modal onOpen={showModal}>
        <img className="displayimg" alt="" src={props.data.image} />
        <p className="displaytxt">{props.data.nama}</p>
        <NumberFormat
          className="displaynum"
          value={props.data.harga}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rp."}
        />
      </Modal>

      {isOpen && (
        <ModalContent onClose={() => setIsopen(false)}>
          <div className="modalContent">
            <div className="modalimgwrap">
              <img alt="" className="modalimg" src={props.data.image} />
            </div>

            <div className="modaltxtwrap">
              <div className="content">
                <p className="modaltxtheader">{props.data.nama}</p>
                <hr />
                <div className="listmodaltxt">
                  <div className="wraplistmodaltxt">
                    <p className="titlemodaltxt">Harga</p>
                    <p className="modaltxt">
                      <NumberFormat
                        className="modaltxt modalnum"
                        value={props.data.harga}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rp."}
                      />{" "}
                    </p>
                  </div>

                  <div className="wraplistmodaltxt">
                    <p className="titlemodaltxt">Brand</p>
                    <p className="modaltxt">{props.data.brand}</p>
                  </div>

                  <div className="wraplistmodaltxt">
                    <p className="titlemodaltxt">Penyimpanan</p>
                    <p className="modaltxt">{props.data.penyimpanan} GB</p>
                  </div>

                  <div className="wraplistmodaltxt">
                    <p className="titlemodaltxt">Ukuran</p>
                    <p className="modaltxt">{props.data.ukuran}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalContent>
      )}
    </div>
  );
}
