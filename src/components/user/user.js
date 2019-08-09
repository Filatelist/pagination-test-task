import React from "react";

const User = ({ id, name, surname, desc }) => {
  return (
    <div className="user bg-custom custom-margine">
      <div className="name">
        <p>
          {name} {surname}
        </p>
      </div>
      <div className="description">{desc}</div>
      <span className="user-number float-right">ID: {id}</span>
    </div>
  );
};
export default User;
