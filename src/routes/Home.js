import React, { useState } from 'react';

import styled from 'styled-components';

// Common components
import Alert from 'common/Alert';
import Panel from 'common/Panel';
import Modal from 'common/Modal';

// Constants
import styles from 'constants/styles';

import { useFirebaseQuery } from 'hooks/useFirebase';

const Circle = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${(props) => `${props.color || '#FFFFFF'}`};
  margin: 5px;
  display: inline-block;
  border-radius: 50%;
  box-shadow: ${styles.shadow};
`;

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  // Sample usage of `useFirebaseQuery` hook
  const {
    data,
    loading,
    error,
    refetch,
  } = useFirebaseQuery({ collection: 'customers'});

  const alerts = [
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ];

  const onClose = () => {
    setModalOpen(false)
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="four columns">
          <Panel>
            <h2>Alerts</h2>
            { alerts.map((alert, index) => {
              return (
                <div key={index} style={{ margin: 20 }}>
                <Alert type={alert}>
                  This is a { alert } alert.
                </Alert>
                </div>
              );
            }) }
          </Panel>
        </div>

        <div className="four columns">
          <div className="row">
            <Panel>
              <h1>Theme Colors</h1>
              <Circle color="#4392F1"/>
              <Circle />
              <Circle color="#262626"/>
              <Circle color="#2E80A7"/>
              <Circle color="#DC493A"/>
            </Panel>
          </div>

          <div className="row" style={{ marginTop: 50 }}>
            <Panel>
              <button
                onClick={() => setModalOpen(true)}
                type="button"
                className="button button-primary">
                Open Modal
              </button>
              <Modal
                title="Add Customer"
                isOpen={isModalOpen}
                onClose={onClose}
                footer={(
                  <React.Fragment>
                    <button
                      onClick={onClose}>
                      Close
                    </button>
                    <button
                      onClick={onClose}
                      className="button-primary">
                      Submit
                    </button>
                  </React.Fragment>
                )}>
                This is the modal content.
              </Modal>
            </Panel>
          </div>
        </div>

        <div className="four columns">
          <Panel>
            <h2>useFirebaseQuery</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Data Length</th>
                  <th>isLoading?</th>
                  <th>hasError?</th>
                  <th>hasRefetch?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{ data ? data.length : 0 }</td>
                  <td>{ loading ? 'Loading' : 'No' }</td>
                  <td>{ error ? 'Yes' : 'No' }</td>
                  <td>{ refetch ? 'Yes' : 'No' }</td>
                </tr>
              </tbody>
            </table>
          </Panel>
        </div>
      </div>
    </React.Fragment>
  );
}
