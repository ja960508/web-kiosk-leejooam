import styled from 'styled-components';
import color from '../../styles/variables/color';

export const StyledColorPallete = styled.div`
  display: flex;

  .palle {
    width: 2rem;
    height: 2rem;
  }
  .burgundy {
    background-color: ${color.burgundy};
  }
  .carmine {
    background-color: ${color.carmine};
  }
  .red {
    background-color: ${color.red};
  }
  .maroon {
    background-color: ${color.maroon};
  }
`;
