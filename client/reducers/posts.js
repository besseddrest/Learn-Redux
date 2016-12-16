function posts(state = [], action) { // ES6 default params
  // can't mutate state directly, must use a 'pure' function
  // pure function does not depend on and doesn't modify states of vars out of its scope
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      // here we're making a copy of the state
      // using ES6 spread to return a copy of the array
      // slice makes a shallow copy
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1}, // still a copy here
        ...state.slice(i + 1) // everything after the one we are updating
      ]
    default:
      return state;
  }
  return state;
}

export default posts;
