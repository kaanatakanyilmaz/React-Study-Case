import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import ProductContext from "../Context/ProductContext";

function Navbar() {
  const { products, setFilteredProducts } = useContext(ProductContext);

  const handleSearch = (event) => {
    const filteredData = products.filter((product) =>
      product.name
        .trim()
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );

    setFilteredProducts(filteredData);
  };

  return (
    <div className="navbar">
      <div className="input-group">
        <input
          type="text"
          className="input"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearch}
        />
        <button className="input-group-text">
          <CiSearch/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
