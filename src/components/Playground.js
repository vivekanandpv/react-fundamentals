//  npm i prop-types
//  For performance reasons, propTypes is only checked in development mode.

import React from 'react';
import PropTypes from 'prop-types';

const Playground = props => {
  return (
    <React.Fragment>
      <ul>
        <li>String (*): {props.firstName}</li>
        <li>Number: {props.year}</li>
        <li>Boolean (*): {props.isActive ? 'Active' : 'Inactive'}</li>
        <li>Object: {props.car.model}</li>
        <ul>
          {props.books.map((b, i) => (
            <li key={i}>Array: {b}</li>
          ))}
        </ul>
        <li>String or Number: {props.stringOrNumber}</li>
        <li>Enum Emulation: {props.enumEmulation}</li>
      </ul>
    </React.Fragment>
  );
};

Playground.propTypes = {
  firstName: PropTypes.string.isRequired,
  year: PropTypes.number,
  isActive: PropTypes.bool.isRequired,
  car: PropTypes.object,
  books: PropTypes.arrayOf(PropTypes.string),
  stringOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  enumEmulation: PropTypes.oneOf(['India', 'USA', 'Japan', 'Germany'])
};

Playground.defaultProps = {
  firstName: 'Default name',
  stringOrNumber: 'Default string or number'
};

export default Playground;
