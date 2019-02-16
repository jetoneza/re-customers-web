import React from 'react';
import { Link } from 'react-router-dom';

export default function Customers() {
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      contact: '+639205063562',
    },
    {
      id: 2,
      name: 'Jenny Dee',
      contact: '+639307686942',
    },
    {
      id: 3,
      name: 'Andres Boni',
      contact: '+639295739175',
    },
    {
      id: 4,
      name: 'Jose R.',
      contact: '+639562938509',
    },
  ];

  return (
    <div>
      <h1>Customers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer)=> (
            <tr key={customer.id}>
              <td>
                <Link to={`/customer/${customer.id}`}>
                  {customer.name}
                </Link>
              </td>
              <td>{customer.contact}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
