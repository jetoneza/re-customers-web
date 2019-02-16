import styled from 'styled-components';

// Constants
import colors from 'constants/colors';

const SideBarWrapper = styled.div`
  .sidebar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin-top: 56px;
    width: 200px;
    padding-top: 0.5rem;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);

    .nav {
      margin-top: 20px;

      .nav-link {
        color: ${colors.grayDarkest};

        &:hover {
          background: ${colors.platinum};
          color: ${colors.black};
        }
      }
    }
  }
`;

SideBarWrapper.displayName = 'SideBarWrapper';

export default SideBarWrapper;
