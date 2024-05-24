import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";

function Cart() {
  const { carts, setCarts } = useContext(ProductContext);
 

  const handleIncrease = (productId) => {
    
    // const updatedCart = carts.map((item) => { 
    //   if (item.id === productId) {              
    //     return { ...item, quantity: item.quantity + 1 };
    //   }
    // });
    // console.log("+ butonu",updatedCart);
    // setCarts(updatedCart);
  };

  const handleDecrease = (productId) => {
    // const updatedCart = carts.map((item) => {
    //   if (item.id === productId && item.quantity > 0) {
    //     return { ...item, quantity: item.quantity - 1 };
    //   }
    //   return item;
    // });
    // console.log("- butonu",updatedCart);
    // setCarts(updatedCart.filter((item) => item.quantity > 0)); // Negatif miktarları kaldır
  };

  const cartsProduct = carts.map((product) => (
    <div key={product.id}>
      <div className="row g-0">

        <div className="col-md-8" style={{ fontSize: "15px", strong: "bold" }}>
          <b>
            {product.name} {product.model}
          </b>
          <br />
          <div style={{ color: "#2a59fe" }}>
            <b>
              {product.price} ₺
            </b>
          </div>
        </div>
        <div className="col-md-4">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" style={{ fontSize: "18px", padding: "1px 10px", background: "white", color: "#2a59fe" }} onClick={() => handleDecrease(product.id)}> - </button>
            <button type="button" className="btn btn-primary" style={{ fontSize: "18px", padding: "1px 10px" }}> {product.quantity} </button>
            <button type="button" className="btn btn-primary" style={{ fontSize: "18px", padding: "1px 10px", background: "white", color: "#2a59fe" }} onClick={() => handleIncrease(product.id)}> + </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <p style={{ color: "grey" }}><b>Cart</b></p>
      <div className="card-body" style={{ border: "1px solid #dee2e6", borderRadius: "0.2rem", height: "auto" }}>
        {cartsProduct}
      </div>
    </div>
  );
}

export default Cart;
