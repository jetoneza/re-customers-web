import React from 'react';

export default function Container({
  children,
  fluid,
  style
}) {
  // TODO: Improve this. Maybe use classnames.
  const className = fluid ? 'container-fluid' : 'container';
  return (
    <div
      className={className}
      style={style}
    >
      { children }
    </div>
  );
}
