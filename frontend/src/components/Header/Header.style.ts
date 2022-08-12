import styled, { keyframes } from 'styled-components';
import { SectionContainer } from '../../styles/global';
import color from '../../styles/variables/color';

const jump = keyframes`
  0% {
    color: ${color.white};
    transform: translateY(0);
  } 3% {
    transform: translateY(-10px);
  } 6% {
    color: ${color.red};
    transform: translateY(0);
  } 9% {
    transform: translateY(-10px);
  } 12%, 100% {
    color: ${color.white};
    transform: translateY(0);
  }
`;

export const StyledHeader = styled.header`
  background: ${color.black};
  color: ${color.white};
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  h1 {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
  }

  .header-btns {
    position: absolute;
    top: 0;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .jumpper-text {
    display: block;
    margin-left: 0.5rem;
    position: relative;
    animation: ${jump} 10s infinite ease-in-out;
  }
`;

export const HeaderContent = styled(SectionContainer)`
  position: relative;
`;
