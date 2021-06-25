// dependencies
import React from 'react';

const Cart = (props) => {
   const addedCountry = props.addedCountry;

   let totalPopulation = 0;
   for (let i = 0; i < addedCountry.length; i++) {
      const country = addedCountry[i];

      totalPopulation = totalPopulation + country.population;
   }

   return (
      <div>
         <h2>Country Added: {addedCountry.length}</h2>
         <h3> Total Population: {totalPopulation} </h3>
      </div>
   );
};

export default Cart;
