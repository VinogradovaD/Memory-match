import styled from 'styled-components';
import { breakpoints } from '../../../../utils/breakpoints';

export const ResultWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ResultInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  box-sizing: border-box;
  padding: 60px 80px;

  @media (max-width: ${breakpoints['laptop']}) {
    width: 60%;
    padding: 40px 60px;
  }

  @media (max-width: ${breakpoints['tablet']}) {
    width: 70%;
  }

  @media (max-width: ${breakpoints['pad']}) {
    width: 80%;
    padding: 30px 60px;
  }

  @media (max-width: ${breakpoints['phone']}) {
    width: 90%;
    padding: 20px 40px;
  }
`;

export const ResultText = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 80px;
  white-space: pre-line;

  @media (max-width: ${breakpoints['pad']}) {
    width: 100%;
    font-size: 20px;
    margin-bottom: 50px;
  }
`;

export const ResultButton = styled.button`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  text-transform: uppercase;
  padding: 20px 60px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${breakpoints['pad']}) {
    padding: 15px 50px;
  }

  @media (max-width: ${breakpoints['phone']}) {
    padding: 10px 40px;
  }
`;
