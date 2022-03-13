import "./App.css";
import React from "react";
import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";

const App = () => {
  return (
    <div className="app">
      <UserList dataSrc="https://jsonplaceholder.typicode.com/users" />
      <UserProfile dataSrc="https://jsonplaceholder.typicode.com/posts?userId=1" />
    </div>
  );
};

export default App;
