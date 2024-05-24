import React from 'react';
import Navbar from './Navbar';

import WalletLeft from './WalletLeft';
import WalletRight from './WalletRight';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="container">
          <div className="row justify-content-center align-items-center"> 
            <div className="col-lg-2">
            <Link to={"/"}>  <strong style={{color:"white"}}>Eteration</strong></Link>  
            </div>
            <div className="col-lg-8 mb-0"> 
              <Navbar/>
            </div>
            <div className="col-1">
              <WalletLeft/>
            </div>
            <div className="col-1">
              <WalletRight/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
