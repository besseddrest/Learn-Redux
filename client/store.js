import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// root reducer
import rootReducer from './reducers/index';

// data
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts, // ES6, the same as posts: posts
  comments // ES6, the same as comments: comments
}

// args: ([reducer index], [default])
const store = createStore(rootReducer, defaultState);

// keeps track of browser history
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
