import styled from 'styled-components';
import shadow from '../variables/shadow';

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  box-shadow: ${shadow.normalShadow};

  strong {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;
