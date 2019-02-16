import React from 'react';
import PropTypes from 'prop-types';

function Input({
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
}) {
  return (
    <div className="form-group">
      { label && <label htmlFor={name}>{label}</label> }
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  name: '',
  onChange: () => {},
  placeholder: 'Enter text',
  type: 'text',
};

export default Input;
