import React, { FC, useEffect, useState } from 'react';
import { Counter } from './components/Counter';
import { Card } from './components/Card';
import { Result } from './components/Result';
import './style.ts';
import { doubleCards } from './data';
import { shuffle } from './utils';
import { GameCards, GameContainer, GameContent, GameTitle } from './style';
import { CardStatus } from './components/Card/types';

export const Game: FC = () => {
  const totalMovesNumber = 30;
  const [shuffleCards, setShuffleCards] = useState<string[]>([]);
  const [movesNumber, setMovesNumber] = useState(0);
  const [attemptsNumber, setAttemptsNumber] = useState(totalMovesNumber);
  const [cardsStatus, setCardsStatus] = useState<CardStatus[]>([]);
  const [selectedCards, setSelectedCards] = useState<[number | null, number | null]>([null, null]);
  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    const newCards = shuffle(doubleCards);
    setCardsStatus(newCards.map(() => CardStatus.CLOSED));
    setShuffleCards(newCards);
  }, [gameEnd]);

  useEffect(() => {
    if (!attemptsNumber) {
      setGameEnd(true);
    }
  }, [attemptsNumber, cardsStatus]);

  const onCardClick = (id: number) => {
    if (selectedCards[0] !== null && selectedCards[1] !== null) {
      return;
    }

    if (selectedCards[0] === id) {
      return;
    }

    const newCardsStatus = cardsStatus.map((el, index) => (index === id ? CardStatus.OPENED : el));
    setCardsStatus(newCardsStatus);

    if (selectedCards[0] === null) {
      setSelectedCards([id, null]);
    }

    if (selectedCards[0] !== null && selectedCards[1] === null) {
      setSelectedCards([selectedCards[0], id]);
      setTimeout(checkCards, 700, selectedCards[0], id);
    }

    setAttemptsNumber(attemptsNumber - 1);
    setMovesNumber(movesNumber + 1);
  };

  const checkCards = (firstCardId: number, secondCardId: number) => {
    if (shuffleCards[firstCardId] === shuffleCards[secondCardId]) {
      const newCardsStatus = cardsStatus.map((el, index) =>
        index === firstCardId || index === secondCardId ? CardStatus.HIDDEN : el,
      );
      setCardsStatus(newCardsStatus);

      if (newCardsStatus.filter((el) => el !== CardStatus.HIDDEN).length === 0) {
        setGameEnd(true);
      }
    } else {
      const newCardsStatus = cardsStatus.map((el, index) =>
        index === firstCardId || index === secondCardId ? CardStatus.CLOSED : el,
      );
      setCardsStatus(newCardsStatus);
    }
    setSelectedCards([null, null]);
  };

  const newGameButtonClick = () => {
    setMovesNumber(0);
    setAttemptsNumber(totalMovesNumber);
    setGameEnd(false);
  };

  return (
    <GameContainer>
      <GameTitle>
        How I met your mother <br /> Memory match
      </GameTitle>
      <GameContent>
        <Counter title="Moves made" value={movesNumber} />
        <GameCards>
          {shuffleCards.map((card, idx) => (
            <Card key={idx} id={idx} image={card} status={cardsStatus[idx]} onClick={onCardClick} />
          ))}
        </GameCards>
        <Counter title="Moves left" value={attemptsNumber} />
      </GameContent>
      {gameEnd &&
        (!attemptsNumber && cardsStatus.filter((item) => item === CardStatus.CLOSED).length ? (
          <Result text={`Sorry, you are lost`} onButtonClick={newGameButtonClick} />
        ) : (
          <Result text={`Congratulations, you are won`} onButtonClick={newGameButtonClick} />
        ))}
    </GameContainer>
  );
};
