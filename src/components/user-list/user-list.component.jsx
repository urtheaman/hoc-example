import React from "react";
import fetchData from "../HOC/fetchData";

const UserList = ({ data }) => {
  return (
    <div className="container user-list">
      {data.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default fetchData(UserList);
