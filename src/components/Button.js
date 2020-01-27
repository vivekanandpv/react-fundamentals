import React from 'react';

const Button = props => {
  return (
    <React.Fragment>
      <button
        className={props.css}
        style={{ color: props.color }}
        onClick={() => props.handler(props.opCode)}
      >
        {props.name}
      </button>
    </React.Fragment>
  );
};

export default Button;
