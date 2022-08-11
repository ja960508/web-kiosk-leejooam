import styled from 'styled-components';
import { SectionContainer } from '../../styles/global';
import color from '../../styles/variables/color';

export const StyledHeader = styled.header`
  background: ${color.black};
  color: ${color.white};
  padding: 1.5rem;
  margin-bottom: 3rem;

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

    button {
      display: flex;
      align-items: center;
      background-color: ${color.black};
      color: ${color.white};
      padding: 0.5rem 1rem;
      border: 1px solid ${color.white};
      font-size: 1rem;
    }

    .open-store svg,
    .logout svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`;

export const HeaderContent = styled(SectionContainer)`
  position: relative;
`;
