import styled from 'styled-components';

// Constants
import styles from 'constants/styles';

const Panel = styled.div.attrs({
  className: 'panel'
})`
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: ${styles.strongShadow};
`;

Panel.displayName = 'Panel';


export default Panel;
