import styled from 'styled-components';
import color from '../../styles/variables/color';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  ul,
  ol {
    display: flex;
    transition: all 0.5s ease-in-out;
  }

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
    left: 2rem;
  }

  .arrow.next {
    svg {
      transform: rotate(-180deg);
    }

    right: 2rem;
  }
`;
