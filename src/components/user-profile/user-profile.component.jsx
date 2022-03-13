import React from "react";
import fetchData from "../HOC/fetchData";

const UserProfile = ({data}) => {
    return (
      <div className="container post-list">
        {data
          .map((post) => {
            return (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            );
          })}
      </div>
    );
  }


export default fetchData(UserProfile);
