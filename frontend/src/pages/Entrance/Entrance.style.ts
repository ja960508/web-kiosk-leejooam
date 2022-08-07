import styled from 'styled-components';

export const EntranceHeader = styled.header`
  background: #1e2222;
  color: #fcfcfc;
  padding: 1rem;
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 720px;

  input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background-color: orange;
  }
`;
