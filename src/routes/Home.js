import React, { useState } from 'react';

import styled from 'styled-components';

// Common components
import Alert from 'common/Alert';
import Panel from 'common/Panel';
import Modal from 'common/Modal';
import Button from 'common/Button';
import Container from 'common/Container';

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
        <Container>
          <Panel>
            <h1>Theme Colors</h1>
            <div style={{
              display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
            }}>
              <Circle color="#4392F1"/>
              <Circle />
              <Circle color="#262626"/>
              <Circle color="#2E80A7"/>
              <Circle color="#DC493A"/>
            </div>
          </Panel>
        </Container>
      </div>

      <div className="row" style={{ marginTop: 50 }}>
        <Container>
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
        </Container>
      </div>

      <div className="row" style={{ marginTop: 50 }}>
        <Container>
          <Panel>
            <h1>Buttons</h1>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="success">Success</Button>
              <Button color="danger">Danger</Button>
              <Button color="warning">Warning</Button>
              <Button color="info">Info</Button>
              <Button disabled>Disabled</Button>
              <Button>Default</Button>
            </div>
          </Panel>
        </Container>
      </div>

      <div className="row" style={{ marginTop: 50 }}>
        <Container>
          <Panel>
            <h1>Modal</h1>
            <Button
              color="primary"
              onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>
            <Modal
              title="Add Customer"
              isOpen={isModalOpen}
              onClose={onClose}
              footer={(
                <React.Fragment>
                  <Button
                    onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    color="success"
                    onClick={onClose}>
                    Submit
                  </Button>
                </React.Fragment>
              )}>
              <p>
                This is the modal content.
              </p>
            </Modal>
          </Panel>
        </Container>
      </div>

      <div className="row" style={{ marginTop: 50 }}>
        <Container>
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
        </Container>
      </div>

      <div className="row" style={{ marginTop: 50 }}>
        <Container>
          <Panel>
            <h2>Panel</h2>
            This is a panel.
          </Panel>
        </Container>
      </div>
    </React.Fragment>
  );
}
