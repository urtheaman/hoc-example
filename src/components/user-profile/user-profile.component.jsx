import React from "react";

class UserProfile extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((res) => {
        const result = res.json();
        return result;
      })
      .then((post) => {
        console.log(post);
        this.setState({ posts: post });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container post-list">
        {posts
          .filter((post, index) => index < 4)
          .map((post) => {
            return (
              <div key={posts.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default UserProfile;
