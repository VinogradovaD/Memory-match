import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const GameContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const GameTitle = styled.h1`
  font-size: 45px;
  line-height: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  text-align: center;

  @media (max-width: ${breakpoints['laptop']}) {
    font-size: 45px;
    line-height: 45px;
  }
  @media (max-width: ${breakpoints['tablet']}) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: ${breakpoints['pad']}) {
    font-size: 35px;
    line-height: 35px;
  }
  @media (max-width: ${breakpoints['phone']}) {
    font-size: 25px;
    line-height: 25px;
  }
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1108px;
  gap: 10px;

  @media (max-width: ${breakpoints['phone']}) {
    flex-direction: column;
  }
`;

export const GameCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  column-gap: 10px;
  row-gap: 10px;

  @media (max-width: ${breakpoints['phone']}) {
    column-gap: 5px;
    row-gap: 5px;
  }
`;
