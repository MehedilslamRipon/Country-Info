import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country';
import Cart from './components/Cart';

function App() {
   const [country, setCountry] = useState([]);
   const [addedCountry, setAddedCountry] = useState([]);

   useEffect(() => {
      fetch('https://restcountries.eu/rest/v2/all')
         .then((response) => response.json())
         .then((data) => setCountry(data));
   }, []);

   const handleAddCountry = (clickedCountry) => {
      const newAddedCountry = [...addedCountry, clickedCountry];
      setAddedCountry(newAddedCountry);
   };

   return (
      <div className="App">
         <h1> Country Loaded: {country.length} </h1>
         <Cart addedCountry={addedCountry}></Cart>
         {country.map((country) => (
            <Country
               key={country.numericCode}
               country={country}
               handleAddCountry={handleAddCountry}
            ></Country>
         ))}
      </div>
   );
}

export default App;
