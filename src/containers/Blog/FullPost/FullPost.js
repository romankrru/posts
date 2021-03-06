import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  }

  deleteHandler = () => {
    axios.delete(`posts/${this.props.id}`)
      .then(res => {
        console.log(res);
      });
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData = () => {

    if (this.props.match.params.id) {
      if (
        (!this.state.loadedPost) ||
        (this.props.match.params.id !== String(this.state.loadedPost.id))
      ) {
        axios.get(`posts/${this.props.match.params.id}`)
          .then(res => {
            this.setState({
              loadedPost: res.data
            });
          });
      }
    }

  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (this.props.match.params.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deleteHandler} className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;