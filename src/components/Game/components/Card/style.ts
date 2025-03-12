import styled from 'styled-components';
import { CardStatus, ICardWrapperStyled } from './types';
import { breakpoints } from '../../../../utils/breakpoints';

export const CardWrapper = styled.div<ICardWrapperStyled>`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.5s;

  @media (max-width: ${breakpoints['laptop']}) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: ${breakpoints['tablet']}) {
    width: 80px;
    height: 80px;
  }

  ${({ theme, $status }) => {
    switch ($status) {
      case CardStatus.CLOSED:
        return `background-color: ${theme.colors.primary};`;
      case CardStatus.HIDDEN:
        return `visibility: hidden;`;
      case CardStatus.OPENED:
        return `
          img {
            visibility: visible;
          }
        `;
    }
  }}
`;

export const CardImage = styled.img`
  object-fit: cover;
  visibility: hidden;
  transition: visibility 0.5s;
  width: 100%;
  height: 100%;
`;
