import styled from 'styled-components';
import color from '../../styles/variables/color';
import shadow from '../../styles/variables/shadow';

export const StyledContainer = styled.div`
  margin-bottom: 2rem;
`;

export const StyledCategoryItem = styled.li<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;
  box-shadow: ${shadow.lowShadow};
  text-align: center;
  padding: 1.5rem 0;
  margin: 0.5rem;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: 600;

  ${({ isSelected }) => {
    return isSelected
      ? `background-color: ${color.lightGray};
    `
      : null;
  }};
`;
