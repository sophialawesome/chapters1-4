import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
         <span className="card-locationName">
           {props.location.name} 
           </span>
           <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Remove</button>
        </h3>
      </div>
    </div>
  );
};

export default LocationCard;