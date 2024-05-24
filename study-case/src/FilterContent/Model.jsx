import React, { useContext, useEffect, useState } from 'react'
import ProductContext from "../Context/ProductContext";



function Model() {

  const{products,setFilteredProducts,filteredModels, setFilteredModels}=useContext(ProductContext);
  
  const[models,setModels]=useState([])
  const[selectedModels,setSelectedModels]=useState([])
  
    const handleSearch=(event)=>{
    const filteredData=products.filter((product)=>product.model.trim().toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredModels(filteredData)
 
  };
  
  useEffect(()=>{
    const updatedmodels=filteredModels.map((index)=>({...index,isChecked:false }))  
    
    setModels(updatedmodels)
  },[filteredModels])

    
    useEffect(()=>{
      if(selectedModels.length===0){
        setFilteredProducts(products);
        return
      }
      const updatedProducts=products.filter((product)=>{
        return selectedModels.includes(product.model);
      })
      setFilteredProducts(updatedProducts)
    },[selectedModels])
  

    //checkbox'ın tıklama işlemi ile değer seçme işlemi
  const handleModelsToggle=(model)=>{
  const updatedModel=models.map((product)=>{
    if(product.model===model){
      return {...product,isChecked:!product.isChecked}
    }
    return product
  })
  setModels(updatedModel)
  if(selectedModels.includes(model)){
    const updatedSelectedModel=selectedModels.filter((index)=>index!==model)
    setSelectedModels(updatedSelectedModel);
  }else{
    setSelectedModels([...selectedModels,model]);
  }
}


  return (
        <div className='model'>
          <br></br>
        <p style={{color:'grey'}}>Model</p>
        <div className="card">
        <div className="card-body" style={{maxHeight:"200px",overflowY:"auto"}}>
        <div className="input-group flex-nowrap">

        <input 
        style={{maxWidth:"150px"}}
        type="text" 
        className="form-control" 
        placeholder="Search" 
        aria-label="Search" 
        onChange={handleSearch}/>

        </div>
        {
          models.map((product)=>(
            
            <div key={product.id}> 
            <input type='checkbox' 
            id={product.model} 
            name="model"          
            checked={product.isChecked} 
            onChange={()=>handleModelsToggle(product.model)}>             
            </input>  
            <label htmlFor={product.model}>{product.model}</label>                             
            </div>
          ))
        }   
        </div>
        </div>
        </div>
   
  )
}

export default Model
