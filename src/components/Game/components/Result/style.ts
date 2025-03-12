import styled from 'styled-components';

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
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  box-sizing: border-box;
  padding: 60px 100px;

  @media screen and (max-width: 992px) {
    width: 60%;
    padding: 40px 80px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 30px 60px;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
    padding: 20px 40px;
  }
`;

export const ResultText = styled.p`
  text-transform: uppercase;
  width: 400px;
  text-align: center;
  font-size: 24px;
  line-height: 50px;
  font-weight: 700;
  margin-bottom: 80px;
  white-space: pre-line;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    padding: 15px 50px;
  }

  @media screen and (max-width: 576px) {
    padding: 10px 40px;
  }
`;
