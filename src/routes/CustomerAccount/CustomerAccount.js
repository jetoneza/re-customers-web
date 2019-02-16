import React from 'react';

// Common Components
import Container from 'common/Container';

// Styled Components
import CustomerAccountWrapper from 'routes/CustomerAccount/CustomerAccountWrapper';

// Sub Components
import Details from './components/Details';
import Transactions from './components/Transactions';

function CustomerAccount({ match }) {
  const customerID = match.params.id;

  return (
    <CustomerAccountWrapper>
      <Container fluid>
        <Details customerID={customerID} />
        <Transactions />
      </Container>
    </CustomerAccountWrapper>
  );
}

// TODO: Add prop types.

export default CustomerAccount;
