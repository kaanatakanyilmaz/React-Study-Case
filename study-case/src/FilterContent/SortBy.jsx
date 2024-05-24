import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";

function SortBy() {
  const { products, setFilteredProducts } = useContext(ProductContext);
  const handleDateSorting = (event) => {
    // Ürünleri tarihe göre sıralama
    const selectedDateSort = event.target.value;
    if (selectedDateSort === "oldToNew") {
      const sortedProducts = [...products].sort( (a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      setFilteredProducts(sortedProducts);
    } else if (selectedDateSort === "newToOld") {
      const sortedProducts = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setFilteredProducts(sortedProducts);
    }
  };
  // Ürünleri fiyata göre sıralama
  const handlePriceSortChange = (event) => {
    const selectedPriceSort = event.target.value;
    if (selectedPriceSort === "highToLow") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setFilteredProducts(sortedProducts);
    } else {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setFilteredProducts(sortedProducts);
    }
  };
  return (
    <div className="sortby">
      <p style={{ color: "grey" }}>
        <b>Sort By</b>
      </p>
      <div className="card">
        <div>
          <input
            type="radio"
            id="oldToNew"
            name="sort"
            value="oldToNew"
            onChange={handleDateSorting}
          />
          <label htmlFor="oldToNew">Old to New</label>
        </div>
        <br></br>
        <div>
          <input
            type="radio"
            id="newToOld"
            name="sort"
            value="newToOld"
            onChange={handleDateSorting}
          />
          <label htmlFor="newToOld">New to Old</label>
        </div>
        <br></br>
        <div>
          <input
            type="radio"
            id="highToLow"
            name="sort"
            value="highToLow"
            onChange={handlePriceSortChange}
          />
          <label htmlFor="highToLow">Price High to Low</label>
        </div>
        <br></br>
        <div>
          <input
            type="radio"
            id="lowToHigh"
            name="sort"
            value="lowToHigh"
            onChange={handlePriceSortChange}
          />
          <label htmlFor="lowToHigh">Price Low to High</label>
        </div>
      </div>
    </div>
  );
}

export default SortBy;
