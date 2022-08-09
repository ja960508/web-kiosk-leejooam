import styled from 'styled-components';
import color from '../../styles/variables/color';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  background-color: ${color.white};

  form {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 10px;

    strong {
      margin-bottom: 1rem;
    }

    input {
      width: 20rem;
      padding: 10px 20px;
      border: 1px solid ${color.gray};
      border-radius: 10px;
      margin-bottom: 1rem;
    }
  }
`;
