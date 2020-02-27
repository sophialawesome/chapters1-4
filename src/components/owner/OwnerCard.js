import { Link } from "react-router-dom";
import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-ownerName">{props.owner.name}</span>
        </h3>
        <p>{props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>
          Remove
        </button>
        <Link to={`/owners/${props.owner.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default OwnerCard;
