import styled from 'styled-components';

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

  @media screen and (max-width: 1200px) {
    font-size: 45px;
    line-height: 45px;
  }
  @media screen and (max-width: 992px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 35px;
  }
  @media screen and (max-width: 576px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1108px;
  gap: 10px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const GameCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  column-gap: 10px;
  row-gap: 10px;

  @media screen and (max-width: 576px) {
    column-gap: 5px;
    row-gap: 5px;
  }
`;
