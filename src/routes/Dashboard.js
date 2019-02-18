import React from 'react';

import styled from 'styled-components';

// Common components
import Alert from 'common/Alert';

import { useFirebaseQuery } from 'hooks/useFirebase';

const Box = styled.div`
  width: 430px;
  height: 230px;
  background-color: ${(props) => `${props.color || '#FFFFFF'}`};
  margin: 20px;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 3px 10px 80px -8px rgba(0,0,0,0.46);
`

export default function Dashboard() {
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

  return (
    <div>
      <h1>Dashboard Colors</h1>
      <Box color="#4392F1"/>
      <Box />
      <Box color="#262626"/>
      <Box color="#2E80A7"/>
      <Box color="#DC493A"/>

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
    </div>
  );
}
