import React from "react";
import { Post } from "./components/Post";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
// const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

export default class App extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const posts = await fetch(postsUrl);
    this.setState({
      posts: await posts.json(),
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
          return (
            <Post
              body={post.body}
              id={post.id}
              title={post.title}
              userId={post.userId}
            />
          );
        })}
      </div>
    );
  }
}
