import React from "react";
import Header from "../Page/Header";
import Cart from "../Components/Cart";
import Cards from "../Components/Cards";
import Filter from "../Components/Filter";
import Checkout from "../Components/Checkout";

function Content() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* ------------------- */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-2">
            <Filter />
          </div>
          <div className="col-7">
            <div className="container">
              <Cards />
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

export default Content;
