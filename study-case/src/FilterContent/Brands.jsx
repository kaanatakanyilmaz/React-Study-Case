import React, { useContext, useState, useEffect } from "react";
import ProductContext from "../Context/ProductContext";

function Brands() {
  const { products,setFilteredProducts,filteredBrands,setFilteredBrands, setFilteredModels} = useContext(ProductContext);
  
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleSearch = (event) => { 
  const filteredData = products.filter((product) =>product.brand.trim().toLowerCase().includes(event.target.value.toLowerCase()));   
  setFilteredBrands(filteredData);
  };

useEffect(() => {
    const updatedBrands = filteredBrands.map((brand) => ({
      ...brand,isChecked: false,
    }));

    setBrands(updatedBrands);
  }, [filteredBrands]);
  
 
    
  useEffect(()=>{
    if(selectedBrands.length===0){
      setFilteredProducts(products)
      return;
    }
    const updatedBrands=products.filter((product)=>{
      return selectedBrands.includes(product.brand)
    });

    setFilteredModels(updatedBrands);
  },[selectedBrands]);
  

  useEffect(()=>{
    if(selectedBrands.length===0){
      setFilteredProducts(products)
      return;
    }
    const updatedBrands=products.filter((product)=>{
      return selectedBrands.includes(product.brand)
    });
    setFilteredProducts(updatedBrands);
  },[selectedBrands]);

  //Kullanıcının Marka seçimi için
  const handleBrandToggle = (brand) => {  
    const updatedBrands = brands.map((product) => {
      if (product.brand === brand) {
        return { ...product, isChecked: !product.isChecked };     
      }
        return product;        
    });
    setBrands(updatedBrands);
    //seçilen markalar arasında işareti değiştirilen marka varsa bu markayı listede çıkar
    if(selectedBrands.includes(brand)){
      const updatedSelectedBrands = selectedBrands.filter((product) => product !== brand);
      setSelectedBrands(updatedSelectedBrands);
    }else{
      setSelectedBrands([...selectedBrands, brand]);
    }
  };



  return (
    <div className="brands">
      <br></br>
     
      <p style={{ color: "grey" }}><b>Brands</b></p>
      <div className="card">
        <div
          className="card-body"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          <div className="input-group flex-nowrap" >
            <input
              style={{maxWidth:"150px"}}
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              
              onChange={handleSearch}
            />
          </div>
          {brands.map((product) => (
            <div key={product.id}>
              <div className="input">
                <input
                  type="checkbox"
                  id={product.brand}
                  name="brand"
                  checked={product.isChecked}
                  onChange={() => handleBrandToggle(product.brand)}
                  
                />
                <label htmlFor={product.brand}>{product.brand}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
