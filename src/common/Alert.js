import React from 'react';

function Alert({
  children,
  type
}) {
  const className = `alert alert-${type || 'light'}`;

  return (
    <div
      className={className}
      role="alert"
    >
      {children}
    </div>
  );
}

export default Alert
