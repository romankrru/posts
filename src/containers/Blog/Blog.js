import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import FullPost from './FullPost/FullPost';
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
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/new-post">New post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
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