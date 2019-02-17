import React from 'react';

import styled from 'styled-components';

const Box = styled.div`
  width: 550px;
  height: 250px;
  background-color: ${(props) => `${props.color || '#FFFFFF'}`};
  margin: 20px;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 3px 10px 80px -8px rgba(0,0,0,0.46);
`

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Box color="#4392F1"/>
      <Box />
      <Box color="#262626"/>
      <Box color="#2E80A7"/>
      <Box color="#DC493A"/>
    </div>
  );
}
