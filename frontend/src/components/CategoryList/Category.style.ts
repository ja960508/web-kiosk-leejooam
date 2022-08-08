import styled from 'styled-components';
import shadow from '../../styles/variables/shadow';

export const StyledCategoryList = styled.ul`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  li {
    cursor: pointer;
    flex: 1 1 30%;
    box-shadow: ${shadow.normalShadow};
    text-align: center;
    padding: 1.5rem 0;
  }
`;
