import styled from 'styled-components';
import color from '../variables/color';

export const LinkButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${color.black};
  color: ${color.white};
  padding: 0.5rem 1rem;
  border: 1px solid ${color.white};
  font-size: 1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;
