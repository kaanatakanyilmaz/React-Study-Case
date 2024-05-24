import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Cart from "../Components/Cart";
import Checkout from "../Components/Checkout";
import { useParams } from "react-router-dom";
import ProductContext from "../Context/ProductContext";

function DetailPage() {
  const { products,cartProduct,setCarts } = useContext(ProductContext);
  const { id } = useParams();
  const [cartDetail,setCartDetail]=useState([])


  useEffect(()=>{
    setCarts(cartDetail)
  },[cartDetail])

  const handleAddtoCart=(productId)=>{
  //   const product=products.find((item)=> item.id===productId);
  //   if(product) {
  //     const updatedCart = products.find(item => item.id===productId?({ ...item, quantity: item.quantity + 1 }):item);
  //     setCartDetail(updatedCart);      
  //  }else{  
  //      const productToAdd = products.find(item => item.id === productId);
  //      setCartDetail([...cartProduct, { ...productToAdd, quantity: 1 }]);
  //      setCartDetail(productToAdd)
  //  }    
  }

  
 const productDetail = products.find((item) => item.id === id);
  if (!productDetail) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-9">
            <div className="container">
              <div className="card mb-3" style={{ maxWidth: "840px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={productDetail.image} className="img-fluid" alt={productDetail.name} style={{margin:"5px",paddingTop: "60px"}}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{productDetail.name} - {productDetail.model}</h5>
                      <h6 className="card-title"style={{color:"#2a59fe"}}>{productDetail.price} ₺</h6>
                      <p className="card-text">
                        {productDetail.description}
                      </p>
                      <button className="btn btn-primary" style={{ width: "500px" }}onClick={() => handleAddtoCart(productDetail.id)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Cart />
            <br />
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
