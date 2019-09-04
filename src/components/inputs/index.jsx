import React from 'react';
import Proptypes from 'prop-types';

const Input = ({
  id, name, type, value, title, placeholder, ...rest
}) => (
  <div>
    <label htmlFor={name}>{title}</label>
    <input
      className="text-input"
      id={name}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  </div>
);

Input.defaultProps = {
  value: (Proptypes.defaultProps = ''),
  placeholder: (Proptypes.defaultProps = ''),
};

Input.propTypes = {
  id: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
  value: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
};

export default Input;
