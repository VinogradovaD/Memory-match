import styled from 'styled-components';
import { CardStatus, ICardWrapperStyled } from './types';

export const CardWrapper = styled.div<ICardWrapperStyled>`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  /* transition: background-color 2s; */

  @media screen and (max-width: 992px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (max-width: 576px) {
    width: 60px;
    height: 60px;
  }

  ${({ theme, $status }) => {
    switch ($status) {
      case CardStatus.CLOSED:
        return `
          background-color: ${theme.colors.primary};
        `;
      case CardStatus.HIDDEN:
        return `visibility: hidden;`;
    }
  }}
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
