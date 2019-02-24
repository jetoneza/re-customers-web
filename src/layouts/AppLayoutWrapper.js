import styled from 'styled-components';

// Constants
import { mediaMax } from 'constants/media';

const AppLayoutWrapper = styled.div`
  .content {
    margin-top: 65px;
    margin-left: 200px;
    padding: 60px;
    min-height: 100vh;

    ${mediaMax.mobileL`
      padding: 10px;
      margin-left: 0;
    `}
  }
`;

AppLayoutWrapper.displayName = 'AppLayoutWrapper';

export default AppLayoutWrapper;

