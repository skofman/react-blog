import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js';
import PostsIndex from './components/posts.index.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
);
