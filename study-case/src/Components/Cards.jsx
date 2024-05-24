import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../Context/ProductContext";
import { Link } from "react-router-dom";

function Cards() {
  const { filteredProducts, products, setCarts } = useContext(ProductContext);
  
  const [cartProduct, setCartProduct] = useState([]);
  // useEffect(()=>{
  //   setCarts(cartProduct)
  // },[cartProduct])
   
  setCarts(cartProduct)

  const handleAddtoCart = (productId) => { 
  const product = cartProduct.find((item) => item.id === productId); 
  if(product) {
     const updatedCart = cartProduct.map(item => item.id===productId?({ ...item, quantity: item.quantity + 1 }):item);
     setCartProduct(updatedCart);      
  }else{  
      const productToAdd = products.find(item => item.id === productId);
      setCartProduct([...cartProduct, { ...productToAdd, quantity: 1 }]);
  }
}
  const productCards = filteredProducts.map((product) => (
    <div className="col" key={product.id}>
      <div className="card h-100" >

      <Link to={`/DetailPage/${product.id}`}> 

        <img src={product.image} className="card-img-top" alt={product.image} />
        
        <div className="card-body">
          <h6 className="card-title" style={{ color: "#2a59fe" }}>{product.price} ₺</h6>
          <br />
          <h6 className="card-title" style={{ fontSize: "0.85rem",height:"30px" }}>{product.name}</h6>  
          </div>
          </Link>  
          <button className="btn btn-primary" onClick={() => handleAddtoCart(product.id)} style={{maxWidth: "150px", height: "40px"}}>Add to Cart</button>
      </div>
    </div>
  ));
  return (
    <div className="row row-cols-1 row-cols-md-4 g-3 m-4">
      {productCards}
     
    </div>
  );
}

export default Cards;
