import React, { Component } from 'react';
import axios from 'axios';

import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New post</a></li>
            </ul>
          </nav>
        </header>
        <Posts />
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;