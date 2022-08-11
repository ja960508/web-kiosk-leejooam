import styled from 'styled-components';
import { SectionContainer } from '../../styles/global';
import color from '../../styles/variables/color';

export const StyledHeader = styled.header`
  background: ${color.black};
  color: ${color.white};
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  h1 {
    margin-bottom: 1.5rem;
  }

  .header-btns {
    position: absolute;
    top: 0;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const HeaderContent = styled(SectionContainer)`
  position: relative;
`;
