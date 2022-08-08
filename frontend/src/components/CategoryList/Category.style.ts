import styled from 'styled-components';
import shadow from '../../styles/variables/shadow';

export const StyledCategoryList = styled.ul`
  margin: 0 auto;
  display: flex;
  position: relative;

  li {
    cursor: pointer;
    flex: 1 1 20%;
    box-shadow: ${shadow.normalShadow};
    text-align: center;
    padding: 1.5rem 0;
  }
`;
