import React from "react";
import { Post } from "./components/Post";
import { PostDetail } from "./components/PostDetail";


const postsUrl = "https://jsonplaceholder.typicode.com/posts";
// const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

export default class App extends React.Component {
  state = {
    posts: [],
    selectedPost: undefined,
  };



  async componentDidMount() {
    const posts = await fetch(postsUrl);
    this.setState({
      posts: await posts.json(),
    });
  }



  render() {
    return (
      <div className="container">
        {!this.state.selectedPost ? this.state.posts.map((post) => {
          return (
            <div className="pointer" onClick={() => this.setState({
              selectedPost: post.id,
          })}>
            <Post
              body={post.body}
              id={post.id}
              title={post.title}
              userId={post.userId}
            />
            </div>
          );
        }): <PostDetail posts={this.state.posts} postId={this.state.selectedPost} backToPostList={()=> this.setState ({
          selectedPost: undefined,
        })}/>}
      </div>
    );
  }
}
