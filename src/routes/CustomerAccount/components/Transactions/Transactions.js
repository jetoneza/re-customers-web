import React from 'react';

// Styled components
import TransactionsWrapper from './TransactionsWrapper';

function Transactions({ customerID }) {
  const transactions = [
    {
      id: 1,
      name: 'Transaction 1',
      type: 'regular',
      status: 'approved',
      note: 'This is a note.',
      amount: 2000,
    },
    {
      id: 2,
      name: 'Transaction 2',
      type: 'regular',
      status: 'approved',
      note: 'This is another note.',
      amount: 1500,
    },
  ].map(({
    amount,
    id,
    name,
    note,
    status,
    type,
  }) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <span className="badge badge-primary">
          {type}
        </span>
      </td>
      <td>
        <span className="badge badge-success">
          {status}
        </span>
      </td>
      <td>{note}</td>
      <td>{amount}</td>
    </tr>
  ))

  return (
    <TransactionsWrapper>
      <h2>Transactions</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Note</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions}
        </tbody>
      </table>
    </TransactionsWrapper>
  );
}

export default Transactions;
