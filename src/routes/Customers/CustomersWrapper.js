import styled from 'styled-components';

const CustomersWrapper = styled.div.attrs({
  className: 'customers-wrapper',
})`
  .table {
    margin-top: 40px;
  }
`;

CustomersWrapper.displayName = 'CustomersWrapper';

export default CustomersWrapper;
