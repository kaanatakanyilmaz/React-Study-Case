import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../Context/ProductContext';

function Checkout() {


  const { carts,setTotalPrice,totalPrice} = useContext(ProductContext);
  const[checkout,setCheckout]=useState([])
   
  // Her sepet güncellendiğinde, checkout state'ini güncelle

  useEffect(() => {
    setCheckout(carts);
  }, [carts]);
    
  const showAlert=()=>{
    alert(`Total Price = ${totalPrice} ₺`);
  }

  let sumPrice = 0;
   
    const calculateTotalPrice = () => {
      checkout.map((product) => {
        sumPrice += product.quantity * product.price;
      });
      setTotalPrice(sumPrice)
      
      return sumPrice;  
    };

  return (
    <div>
      <p style={{ color: "grey" }}><b>Checkout</b></p>
      <div className="card-body" style={{ border: "1px solid #dee2e6", borderRadius: "0.2rem", height:"auto" }}>
        <div><b>Total Price:</b></div> <div style={{color:"#2a59fe"}}><b>{calculateTotalPrice()}  ₺</b></div>
        <br/>
        <button className="btn btn-primary" style={{width:"300px"}}onClick={showAlert}> Checkout</button>
      </div>
    </div>
  )
}

export default Checkout

