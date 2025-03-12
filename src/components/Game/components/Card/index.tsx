import React, { FC } from 'react';
import { CardStatus, ICardProps } from './types';
import { CardImage, CardWrapper } from './style';

export const Card: FC<ICardProps> = ({ id, image, status = CardStatus.CLOSED, onClick }) => {
  return (
    <CardWrapper $status={status} onClick={() => onClick(id)}>
      {status === CardStatus.OPENED && <CardImage src={image} alt="img" />}
    </CardWrapper>
  );
};
