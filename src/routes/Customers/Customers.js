import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Services
import FirebaseService from 'services/FirebaseService';

// Styled Components
import CustomersWrapper from 'routes/Customers/CustomersWrapper';

// Sub Components
import AddCustomerModal from './components/AddCustomerModal';

export default function Customers() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [loadingCustomers, setLoadingCustomers] = useState(false);
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    setLoadingCustomers(true);

    const data = await FirebaseService.getCollection('customers');

    setCustomers(data);
    setLoadingCustomers(false);
  }

  // componentDidMount
  useEffect(() => {
    fetchCustomers();
  }, [])

  const handleToggeModal = (toggle = true) => (e) => {
    setModalOpen(toggle)
  }

  const handleAddCustomerSubmit = async (data) => {
    setSubmitting(true);

    try {
      await FirebaseService.addToCollection('customers', data);
    } catch(error) {
      // TODO: handle error
    }

    setSubmitting(false);
    setModalOpen(false);

    fetchCustomers();
  }

  return (
    <CustomersWrapper>
      <h1>Customers</h1>
      <button
        className="btn btn-success"
        onClick={handleToggeModal(true)}>
        Add Customer
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer)=> (
            <tr key={customer.id}>
              <td>
                <Link to={`/customer/${customer.id}`}>
                  {customer.firstName} {customer.lastName}
                </Link>
              </td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
      { loadingCustomers && <div>Loading Customers...</div> }
      <AddCustomerModal
        isSubmitting={isSubmitting}
        isOpen={isModalOpen}
        onClose={handleToggeModal(false)}
        onSubmit={handleAddCustomerSubmit}
      />
    </CustomersWrapper>
  );
}
