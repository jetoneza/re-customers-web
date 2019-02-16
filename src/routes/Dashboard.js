import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Contact</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>+639205063562</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Jenny Dee</td>
            <td>+639307686942</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
