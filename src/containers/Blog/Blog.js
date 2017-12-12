import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent';
import Posts from './Posts/Posts';
import './Blog.css';
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

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
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
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