// React
import React from 'react';
import {render} from 'react-dom';

// CSS (Stylus)
import css from './styles/style.styl'; // webpack will handle the inclusion of our styles

// Components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// React Router Dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux'; // contains bindings that allows us to use redux with react
import store, {history} from './store'; // store is a default export, history has brackets because it is a named export

// <Route path="/" component={Main}> = parent route matches everything that is '/'
// depending on the URL structure, pass to Main the child PhotoGrid or child Single
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
