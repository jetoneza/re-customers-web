import React from 'react';
import PropTypes from 'prop-types';

function Container({
  children,
  style
}) {
  return (
    <div
      className="container"
      style={style}
    >
      { children }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

Container.defaultProps = {
  children: null,
  style: {}
};

export default Container;
