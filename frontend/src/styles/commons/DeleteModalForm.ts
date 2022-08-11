import styled from 'styled-components';
import shadow from '../variables/shadow';

export const StyledDeleteModalForm = styled.form`
  box-shadow: ${shadow.normalShadow};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 10px;

  strong {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;
