// dependencies
import React from 'react';

const Country = (props) => {
   const { name, region, population, flag } = props.country;
   const flagStyle = { height: '150px' };
   const countryStyle = {
      border: '1px solid black',
      padding: '10px',
      width: '52%',
      margin: '20px auto',
   };

   return (
      <div style={countryStyle}>
         <h4> Name : {name} </h4>
         <img style={flagStyle} src={flag} alt="flag" />
         <p> Population: {population} </p>
         <p>
            <small> Region: {region} </small>
         </p>
         <button onClick={() => props.handleAddCountry(props.country)}>
            Add Country
         </button>
      </div>
   );
};

export default Country;
