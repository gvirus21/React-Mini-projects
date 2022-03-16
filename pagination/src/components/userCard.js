import React from "react";

const UserCard = ({ firstName, lastName }) => {
  return (
    <div className="card">
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
};

export default UserCard;
