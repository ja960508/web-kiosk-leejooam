import styled from 'styled-components';
import color from '../../../../../styles/variables/color';

export const StyledQuantityOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  .option-guide {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .container {
    display: flex;
    align-items: center;

    svg {
      width: 2rem;
      height: 2rem;
      margin-left: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  .container svg path {
    fill: ${color.gray};
  }
`;

export const StyledChoiceOptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  .option-guide {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .option-detail-values {
    font-size: 0.8rem;
    color: ${color.black};

    span:nth-child(even)::before,
    span:nth-child(even)::after {
      content: ',';
      font-size: 1.5rem;
    }
  }

  .container {
    display: flex;
    align-items: center;

    svg {
      width: 2rem;
      height: 2rem;
      margin-left: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  .container svg path {
    fill: ${color.gray};
  }
`;
