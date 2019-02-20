import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Common Components
import Panel from 'common/Panel';
import Button from 'common/Button';

// Styled Components
import CustomersWrapper from 'routes/Customers/CustomersWrapper';

// Sub Components
import AddCustomerModal from './components/AddCustomerModal';

// Hooks
import {
  MUTATION_TYPES,
  useFirebaseMutation,
  useFirebaseQuery,
} from 'hooks/useFirebase';

export default function Customers() {
  const [isModalOpen, setModalOpen] = useState(false);

  const {
    data: customers,
    loading: loadingCustomers,
    refetch: refetchCustomers,
  } = useFirebaseQuery({ collection: 'customers'});

  const {
    loading: isSubmitting,
    addCustomer,
  } = useFirebaseMutation({
    collection: 'customers',
    name: 'addCustomer',
    type: MUTATION_TYPES.ADD,
  });

  const handleToggeModal = (toggle = true) => (e) => {
    setModalOpen(toggle)
  }

  const handleAddCustomerSubmit = async (data) => {
    await addCustomer(data);

    setModalOpen(false);
    refetchCustomers();
  }

  return (
    <CustomersWrapper>
      <Panel>
        <h1>Customers</h1>
        <Button
          color="primary"
          onClick={handleToggeModal(true)}>
          Add Customer
        </Button>
        <table className="table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers && customers.map((customer)=> (
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
      </Panel>
    </CustomersWrapper>
  );
}
