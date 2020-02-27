import React from "react";
import "./Employee.css";
import { Link } from "react-router-dom";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employeeName">{props.employee.name}</span>
        </h3>
        <button
          type="button"
          onClick={() => props.deleteEmployee(props.employee.id)}
        >
          Fire
        </button>

        <Link to={`/employees/${props.employee.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
