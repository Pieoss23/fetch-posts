import React from "react";

export class Post extends React.Component {
  render() {
    return (
      <div className="postContainer">
        <div className="postContainer__header">
          <h3>{this.props.id}) {this.props.title} </h3>
          <p>{this.props.userId}</p>
        </div>
        <div className="postContainer__footer">
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}
