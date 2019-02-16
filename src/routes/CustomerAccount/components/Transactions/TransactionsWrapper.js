import styled from 'styled-components';

const TransactionsWrapper = styled.div.attrs({
  className: 'transactions-wrapper',
})`
  margin-top: 60px;

  .table {
    margin-top: 40px;
  }
`;

TransactionsWrapper.displayName = 'TransactionsWrapper';

export default TransactionsWrapper;

