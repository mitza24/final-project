// Dependencies
import React from 'react';

// Stateless component / Functional component
const Field = (props) => (
  <div>
    <label>{props.label}</label>
    <input
      onChange={props.onChange}
      type={props.textarea ? 'textarea' : 'text'}
      value={props.value}
    />
  </div>
);
Field.defaultProps = {
  textarea: false,
};

export default Field;