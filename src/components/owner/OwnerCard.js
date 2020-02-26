import React from "react";

const OwnerCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    <span className="card-ownerName">
                        {props.owner.name}
                    </span>
                </h3>
                <p>{props.owner.phoneNumber}</p>
            </div>
        </div>
    );
};

export default OwnerCard;