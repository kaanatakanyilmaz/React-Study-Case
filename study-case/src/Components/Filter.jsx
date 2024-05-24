import React from "react";

import Model from "../FilterContent/Model";
import SortBy from "../FilterContent/SortBy";
import Brands from "../FilterContent/Brands";

import "../App.css";

function Filter() {
  return (
    <div>
      <div>
      <SortBy/>
      <Brands/>
      <Model/>
      </div>
    </div>
  );
}

export default Filter;
