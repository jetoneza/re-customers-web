import React from 'react';

function CustomerAccount({ match }) {
  const customerID = match.params.id;

  return (
    <h1>Customer #{customerID}</h1>
  );
}

export default CustomerAccount;
