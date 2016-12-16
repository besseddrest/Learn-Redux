/*
  Reducers

  Reducers match up the dispatched (fired) action with a function that should be called.

  It takes in a copy of state, modifies it, and returns the new state
  When state gets large, it makes sense to have multiple reducers that only deal with a piece of the state

  HC:
  reducer is what actually does editing of state
  !! every time you dispatch an action, every single reducer is run
    !! whether you choose to act on that action or not is up to the reducer
  create a reducer for every single piece of state
  when posts get updated, run posts-reducer, etc.
*/

// A reducer takes in two things
// action - information about what happened
// copy of current state

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// import individual reducers
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
