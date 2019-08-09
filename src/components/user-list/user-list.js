import React from "react";
import User from "../user";

const UserList = ({ users }) => {

  return (
    <ul className="list-group">
      {users.map(({ id, name, surname, desc }) => {
        return (
          <li key={id} className="m-2 list-group-item">
            <User id={id} name={name} surname={surname} desc={desc} />
          </li>
        );
      })}
    </ul>
  );
};
export default UserList;
