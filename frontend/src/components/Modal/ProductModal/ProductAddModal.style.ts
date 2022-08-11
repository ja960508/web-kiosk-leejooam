import styled from 'styled-components';
import color from '../../../styles/variables/color';

export const StyledProductAddForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  strong {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  input {
    width: 20rem;
    padding: 10px 20px;
    border: 1px solid ${color.gray};
    border-radius: 10px;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .option-btn-container {
    display: flex;
    margin-bottom: 0.5rem;

    button {
      border-radius: 10px;
      flex: 1 1 40%;
      padding: 1rem;
      background-color: ${color.red};
      color: ${color.white};
    }

    button:first-child {
      margin-right: 0.5rem;
    }
  }

  button[type='submit'] {
    background-color: ${color.red};
    color: ${color.white};
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 10px;
  }

  .add-options {
    font-size: 0.9rem;
    color: ${color.black};
    margin-bottom: 0.5rem;
  }
`;
