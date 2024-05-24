import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);//Ana veri
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [carts,setCarts]=useState([]);
  const [totalPrice,setTotalPrice]=useState([]);
  
  

  useEffect(() => {
    axios("https://5fc9346b2af77700165ae514.mockapi.io/products").then(
      (res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        setFilteredBrands(res.data);
        setFilteredModels(res.data);
        setCarts(res.data);       
      }
    );
  }, []);
  

  return (
    <ProductContext.Provider
      value={{products,setProducts,filteredProducts,setFilteredProducts,filteredBrands,setFilteredBrands,filteredModels, setFilteredModels,carts,setCarts,totalPrice,setTotalPrice}}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
