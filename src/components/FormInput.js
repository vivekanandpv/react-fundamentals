import React from 'react';

const FormInput = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <input
        type='text'
        ref={ref}
        className='form-control'
        onChange={props.handler}
      />
    </React.Fragment>
  );
});

export default FormInput;
