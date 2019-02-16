import styled from 'styled-components';

// Constants
import colors from 'constants/colors';

// TODO: Enable to dynamically set loader size.
const LOADER_SIZE = 80;
const LOADER_BORDER = LOADER_SIZE * 0.15;

const LoaderWrapper = styled.div`
   padding: 40px;

  .loader {
    margin: auto;
    border: ${LOADER_BORDER}px solid ${colors.grayLight};
    border-radius: 50%;
    border-top: ${LOADER_BORDER}px solid ${colors.blueBerryLight};
    width: ${LOADER_SIZE}px;
    height: ${LOADER_SIZE}px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

LoaderWrapper.displayName = 'LoaderWrapper';

export default LoaderWrapper;
