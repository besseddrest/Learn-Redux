// Main is really just a presentational component
import React from 'react';
import {Link} from 'react-router'; // URL utility?

const Main = React.createClass({
  render() {
    // React.cloneElement allows us to pass props to either child: PhotoGrid or Single
    return (
      <div>
        <h1>
          <Link to="/">Haroldstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
