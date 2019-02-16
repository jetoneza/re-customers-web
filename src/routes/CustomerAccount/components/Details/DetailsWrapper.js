import styled from 'styled-components';

const DetailsWrapper = styled.div.attrs({
  className: 'details-wrapper',
})`
  .table {
    margin-top: 40px;
  }
`;

DetailsWrapper.displayName = 'DetailsWrapper';

export default DetailsWrapper;

