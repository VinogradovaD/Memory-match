import React, { FC } from 'react';
import { ICounterProps } from './types';
import { CounterContainer, CounterTitle, CounterValue } from './styles';

export const Counter: FC<ICounterProps> = ({ title, value }) => {
  return (
    <CounterContainer>
      <CounterTitle>{title}</CounterTitle>
      <CounterValue>{value}</CounterValue>
    </CounterContainer>
  );
};
