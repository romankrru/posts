import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <nav>
            <ul>
              <li><NavLink exact to="/posts">Home</NavLink></li>
              <li><NavLink to="/new-post">New post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
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