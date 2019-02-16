import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Common Components
import Modal from 'common/Modal';
import Input from 'common/Input';

function AddCustomerModal({
  isOpen,
  onClose,
  onSubmit
}) {
  const defaultFormData = {
    address: '',
    contact: '',
    firstName: '',
    lastName: '',
  };

  const [formData, setFormData] = useState(defaultFormData);

  const clearForm = () => {
    setFormData(defaultFormData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    onClose();
    clearForm();
  }

  const handleInputChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const {
    address,
    contact,
    firstName,
    lastName
  } = formData

  return (
    <Modal
      title="Add Customer"
      isOpen={isOpen}
      onClose={onClose}
      footer={(
        <React.Fragment>
          <button
            onClick={onClose}
            className="btn btn-danger">
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="btn btn-success">
            Submit
          </button>
        </React.Fragment>
      )}>
      <form onSubmit={handleSubmit}>
        <Input
          value={firstName}
          onChange={handleInputChange}
          name="firstName"
          placeholder="Enter First Name"
          label="First Name" />
        <Input
          value={lastName}
          onChange={handleInputChange}
          name="lastName"
          placeholder="Enter Last Name"
          label="Last Name" />
        <Input
          value={contact}
          onChange={handleInputChange}
          name="contact"
          placeholder="Enter Contact Number"
          type="phone"
          label="Contact #" />
        <Input
          value={address}
          onChange={handleInputChange}
          name="address"
          placeholder="Enter Address"
          label="Address" />
      </form>
    </Modal>
  );
}

AddCustomerModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

AddCustomerModal.defaultProps = {
  isOpen: true,
  onClose: () => {},
  onSubmit: () => {},
};

export default AddCustomerModal;
