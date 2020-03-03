import { Link } from "react-router-dom";
import React from "react";
import "./Animal.css";

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
        <button
          type="button"
          onClick={() => props.deleteAnimal(props.animal.id)}
        >
          Discharge
        </button>
        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>
        </Link>
      </div>
      <button
        type="button"
        onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default AnimalCard;
