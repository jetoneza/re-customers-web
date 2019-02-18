import styled from 'styled-components';

// Constants
import colors from 'constants/colors';
import styles from 'constants/styles';

const SideBarWrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    margin-top: 60px;
    width: 200px;
    padding: 70px 0;
    box-sizing: border-box;
    box-shadow: ${styles.shadow};

    .nav {
      list-style: none;

      .nav-item {
        margin-bottom: 2rem;

        .nav-link {
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          padding: 12px 30px;
          color: ${colors.black};

          &.active,
          &:hover {
            color: ${colors.primary};
          }
        }
      }
    }
  }
`;

SideBarWrapper.displayName = 'SideBarWrapper';

export default SideBarWrapper;
