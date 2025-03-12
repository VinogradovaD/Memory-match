import styled from 'styled-components';

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

  @media screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 28px;
  }
  @media screen and (max-width: 992px) {
    font-size: 20px;
    line-height: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (max-width: 576px) {
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
