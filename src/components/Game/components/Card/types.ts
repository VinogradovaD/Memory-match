export enum CardStatus {
  OPENED = 'opened',
  CLOSED = 'closed',
  HIDDEN = 'hidden',
}

export interface ICardProps {
  id: number;
  image: string;
  status: CardStatus;
  onClick: (id: number) => void;
}

export interface ICardWrapperStyled {
  $status: CardStatus;
}
