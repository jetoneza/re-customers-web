import React from 'react';

// Styled components
import DetailsWrapper from './DetailsWrapper';

function Details({ customerID }) {
  return (
    <DetailsWrapper>
      <h2>Customer Details</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customerID}</td>
            <td>John Doe</td>
            <td>+639205063562</td>
            <td>San Francisco, CA</td>
          </tr>
        </tbody>
      </table>
    </DetailsWrapper>
  );
}

export default Details;
