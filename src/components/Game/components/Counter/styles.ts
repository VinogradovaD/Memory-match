import styled from 'styled-components';
import { breakpoints } from '../../../../utils/breakpoints';

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  text-align: center;
  gap: 10px;

  font-size: 24px;
  line-height: 30px;
  font-weight: 500;

  @media (max-width: ${breakpoints['laptop']}) {
    font-size: 22px;
    line-height: 28px;
  }
  @media (max-width: ${breakpoints['tablet']}) {
    font-size: 20px;
    line-height: 26px;
  }
  @media (max-width: ${breakpoints['pad']}) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: ${breakpoints['phone']}) {
    font-size: 16px;
    line-height: 22px;

    flex-direction: row;
    align-items: center;
    width: unset;
  }
`;

export const CounterTitle = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CounterValue = styled.p`
  color: ${({ theme }) => theme.colors.accent};
`;
