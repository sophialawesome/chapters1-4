import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
         <span className="card-locationName">
           {props.location.name} 
           </span>
        </h3>
      </div>
    </div>
  );
};

export default LocationCard;