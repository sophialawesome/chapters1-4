import { Link } from "react-router-dom";
import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-locationName">{props.location.name}</span>
        </h3>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.location.id)}
        >
          Close
        </button>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/locations/${props.location.id}/edit`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
