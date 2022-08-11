import styled from 'styled-components';
import color from '../../styles/variables/color';

export const OuterContainer = styled.div`
  position: relative;

  .arrow {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    svg path {
      stroke: ${color.black};
    }
  }

  .arrow.prev {
    left: -3rem;
  }

  .arrow.next {
    svg {
      transform: rotate(-180deg);
    }

    right: -3rem;
  }
`;

export const Container = styled.div<{ columns: number }>`
  overflow: hidden;
  position: relative;
  padding: 0.5rem;

  .slider {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    transition: transform 0.5s ease-in-out;
  }
`;
