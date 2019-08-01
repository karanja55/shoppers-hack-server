import React from 'react';
import NavBar from "./NavBar";
import suppliers from './suppliers.js';
import { Router } from "@reach/router";
import './App.css';


const supplier = [
  {
    supplier_id: 'trap',
    supplier_name: 'eugene',
    Image: 'jpeg5',
    price: 5600,
    phone_no: 56542

  },
  {
    supplier_id: 'trap',
    supplier_name: 'bob',
    Image: 'jpeg5',
    price: 5600,
    phone_no: 56542

  },


];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <navbar />

        <p>
        <ol>Shoppers hack</ol>
        <ol>Shoppers hack</ol>
    </p>
    


      </header>

     
<div>
  <button>supplier_453s</button>
</div>
<div>
  
</div>
   
    <div className="App">
      
      <footer className="container">
      </footer>
        <p>Where customers meet the suppliers</p>
    

    </div>
  
    </div>

  );
}

export default App;
