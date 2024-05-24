import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { IoWalletOutline } from "react-icons/io5";
function WalletLeft() {
  const { totalPrice } = useContext(ProductContext);
  return (
    <div>
      <IoWalletOutline /> {totalPrice} ₺
    </div>
  );
}

export default WalletLeft;
