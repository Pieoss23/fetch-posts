import React from "react";

export class PostDetail extends React.Component {
    post = this.props.posts.find(post => post.id === this.props.postId);
    render(){
        return (
            <div className="postContainer">
                <div><button onClick={this.props.backToPostList}>Torna indietro</button></div>
            <div className="postContainer__header">
              <h3>{this.post?.id}) {this.post?.title} </h3>
              <p>{this.post?.userId}</p>
            </div>
            <div className="postContainer__footer">
              <p>{this.post?.body}</p>
            </div>
          </div>
        )
    }
}