import React from 'react';

function getClassName({
  dark,
  fixedTop,
  shadow
}) {
  // TODO: Improve this.
  let className = 'navbar';

  if (dark) {
    className += ' navbar-dark bg-dark';
  }

  if (shadow) {
    className += ' shadow';
  }

  if (fixedTop) {
    className += ' fixed-top';
  }

  return className;
}

export default function Nav({
  children,
  ...props
}) {
  const className = getClassName(props);

  return (
    <nav className={className}>
      { children }
    </nav>
  );
}
