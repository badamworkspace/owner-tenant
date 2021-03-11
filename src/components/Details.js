import React from 'react';
import './Details.css';

let Details=({item})=>(
   <div className="container">
     <span className="card">{item.name}</span>
          <p>aadharNumber:{item.aadharNumber}</p>
          
          <div className="card-action">
            phoneNumber:{item.phoneNumber}<br></br>
            email:{item.email}
          </div>
   </div>
)

export default Details;