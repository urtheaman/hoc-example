import React from "react";

class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const result = res.json();
        return result;
      })
      .then((user) => {
        console.log(user);
        this.setState({ users: user });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { users } = this.state;
    return (
      <div className="container user-list">
        {users
          .filter((post, index) => index < 6)
          .map((user) => {
            return (
              <div key={users.id}>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
              </div>
            );
          })}
      </div>
    );
  }
}

export default UserList;
