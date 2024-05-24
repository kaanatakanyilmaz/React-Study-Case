import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { FaUserAlt } from "react-icons/fa";


function WalletRight() {
  // const { totalPrice } = useContext(ProductContext);

  return (
    <div style={{ display: "flex", alignItems: "right", paddingTop: "20px" }}>
      <FaUserAlt /> <p style={{ marginLeft: "15px" }}>Kaan </p>
    </div>
  );
}

export default WalletRight;
