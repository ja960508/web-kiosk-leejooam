import styled from 'styled-components';
import color from '../../../../styles/variables/color';

export const StyledProductOptionList = styled.ul``;

export const StyledProductChioceOption = styled.li`
  list-style: none;

  .option-content-list {
    display: flex;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid ${color.red};

    .option-content-item {
      flex: 1 1 30%;
      text-align: center;
    }

    .choice-label {
      padding: 0.5rem 0;
      display: block;
      width: 100%;
      height: 100%;
    }

    input:checked + .choice-label {
      background-color: ${color.red};
      color: ${color.white};
    }

    input {
      display: none;
    }
  }
`;

export const StyledProductQuantityOption = styled.li`
  list-style: none;

  .option-name {
    display: block;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  .quantity-controller {
    display: flex;
    align-items: center;

    button svg {
      width: 1.5rem;
      height: 1.5rem;

      path {
        fill: ${color.red};
      }
    }

    .option-value {
      flex: 1 1 100%;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .quantity-input {
      display: none;
    }
  }
`;

export const StyleOptionName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
`;
