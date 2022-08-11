import styled from 'styled-components';
import color from '../variables/color';
import shadow from '../variables/shadow';

export const PrimaryButton = styled.button`
  background-color: ${color.red};
  color: ${color.white};
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  box-shadow: ${shadow.normalShadow};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.25rem;
  }
`;
