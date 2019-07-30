import React from 'react';
import NavBar from "./NavBar";
import suppliers from './suppliers.js';
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

        <p>Shoppers hack
    </p>


      </header>
      

   
    <div className="App">
      
      <footer className="container">
      </footer>
        <p>Where customers meet the suppliers</p>
    

    </div>
  
    </div>

  );
}

export default App;
