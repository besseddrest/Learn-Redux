import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    // key={i} and i={i} because you can't actually use 'key' this.props.key
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
});

export default PhotoGrid;
