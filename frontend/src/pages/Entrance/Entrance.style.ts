import styled from 'styled-components';
import color from '../../styles/variables/color';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 720px;

  input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: ${color.lightGray};
  }

  label {
    margin-bottom: 0.5rem;
  }

  .submit-btn {
    padding: 1rem;
    background-color: ${color.black};
    color: ${color.white};
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }

  .auth-type-selector {
    display: flex;
    align-items: center;

    button,
    .divider {
      color: ${color.black};
    }

    .divider {
      margin: 0.5rem;
    }
  }
`;
