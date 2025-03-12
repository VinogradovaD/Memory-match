import React, { FC } from 'react';
import { IResultProps } from './types';
import { ResultButton, ResultInner, ResultText, ResultWrapper } from './style';

export const Result: FC<IResultProps> = ({ text, onButtonClick }) => {
  return (
    <ResultWrapper>
      <ResultInner>
        <ResultText>{text}</ResultText>
        <ResultButton onClick={onButtonClick}>Try again</ResultButton>
      </ResultInner>
    </ResultWrapper>
  );
};
