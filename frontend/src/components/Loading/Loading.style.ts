import styled, { keyframes } from 'styled-components';
import color from '../../styles/variables/color';

const spinAnimation = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(1turn);
}`;

export const LoadingSpinner = styled.div`
  padding: 2.5rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0.5rem solid ${color.gray};
  border-top-color: ${color.burgundy};
  animation: ${spinAnimation} 0.8s linear infinite;
`;

export const LoadingOverlay = styled.div`
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
