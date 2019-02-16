import React from 'react';

// Common Components
import Alert from 'common/Alert';

function NotFound() {
  return (
    <div className="not-found-page">
      <Alert type="danger">
        The page you are looking for is not found.
      </Alert>
    </div>
  );
}

export default NotFound;
