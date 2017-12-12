import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import FullPost from '../FullPost/FullPost';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max',
          };
        });

        this.setState({
          posts: updatedPosts,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  selectPostHandler = (id) => {
    this.setState({
      selectedPostId: id,
    });
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Link to={`${this.props.match.url}/${post.id}`} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.selectPostHandler(post.id)}
          />
        </Link>
      );
    });

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path="/posts/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;