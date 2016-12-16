/**
  Action Creators

  These fire events which the reducer will handle
  We will later call these functions from inside our component

  Later these functions get bound to 'dispatch' fires the actual event
  Right now they just return an object

  It's a code convention to use all capitals and snake case for the event names
  We use const to store the name of the event so it is immutable

  HC:
  Just regular javascript events that get fired off
  this is the file that makes actions that are about to get dispatched
  an action is just an object with information about what happened and what needs to change
  
*/

// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    // payload: don't need to send all info, just what matters
    // in this case, the indentifier of the post
    index // ES6
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}
// @@router/LOCATION_CHANGE - provided by react-router when you change pages
