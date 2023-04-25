import  React, { useEffect, useState } from 'react';
import { Counter } from '../Counter/Counter';
import { Card } from '../Card/Card';
import { Result } from '../Result/Result';
import './App.css';
import { doubleCards } from '../../data';
import { shuffle } from '../../utils';

export const App = () => {
    const totalMovesNumber = 40;
    const [shuffleCards, setShuffleCards] = useState<string[]>([]);
    const [movesNumber, setMovesNumber] = useState(0);
    const [attemptsNumber, setAttemptsNumber] = useState(totalMovesNumber);
    const [cardsStatus, setCardsStatus] = useState<('open' | 'closed' | 'hidden')[]>([]);
    const [selectedCards, setSelectedCards] = useState<[number | null, number | null]>([null, null]);
    const [gameEnd, setGameEnd] = useState(false);

    useEffect(() => {
        const newCards = shuffle(doubleCards);
        setCardsStatus(newCards.map(() => 'closed'));
        setShuffleCards(newCards);
    }, [gameEnd]);

    useEffect(() => {
        if (!attemptsNumber) {
            setGameEnd(true);
        }
    }, [attemptsNumber, cardsStatus])


    const onCardClick = (id: number) => {
        if (selectedCards[0] !== null && selectedCards[1] !== null) {
            return;
        }

        if (selectedCards[0] === id) {
            return;
        }

        const newCardsStatus = cardsStatus.map((el, index) => index === id ? 'open' : el);
        setCardsStatus(newCardsStatus);

        if (selectedCards[0] === null) {
            setSelectedCards([id, null]);
        } 

        if (selectedCards[0] !== null && selectedCards[1] === null) {
            setSelectedCards([selectedCards[0], id]);
            setTimeout(checkCards, 500, selectedCards[0], id);
        }

        setAttemptsNumber(attemptsNumber - 1);
        setMovesNumber(movesNumber + 1);
    };

    const checkCards = (firstCardId: number, secondCardId: number) => {
        if (shuffleCards[firstCardId] === shuffleCards[secondCardId]) {
            const newCardsStatus= cardsStatus.map((el, index) => 
                index === firstCardId || index === secondCardId ? 'hidden' : el
            );
            setCardsStatus(newCardsStatus);

            if ((newCardsStatus.filter((el) => el !== 'hidden')).length === 0) {
                setGameEnd(true);
            }
        } else {
            const newCardsStatus= cardsStatus.map((el, index) => 
                index === firstCardId || index === secondCardId ? 'closed' : el
            );
            setCardsStatus(newCardsStatus);
        }  
        setSelectedCards([null, null]);
    }

    const newGameButtonClick = () => {
        setMovesNumber(0);
        setAttemptsNumber(totalMovesNumber);
        setGameEnd(false);
    }

    return(
        <div className='game'>
            <h1 className='game__title'>Memory</h1>
            <div className='game__content'>
                <Counter title='Сделано ходов' value={movesNumber} />
                <div className='game__cards'>
                    {shuffleCards.map((card, idx) => (
                        <Card key={idx} id={idx} image={card} status={cardsStatus[idx]} onClick={onCardClick} />
                    )) }
                </div>
                <Counter title='Осталось попыток' value={attemptsNumber} />
            </div> 
            {gameEnd && (
                !attemptsNumber && cardsStatus.filter((item) => item === 'closed').length ? (
                    <Result text={`УВЫ, ВЫ ПРОИГРАЛИ\n У ВАС КОНЧИЛИСЬ ХОДЫ`} onButtonClick={newGameButtonClick} />
                ) : (
                    <Result text={`Ура, ВЫ выиграли!\n это заняло ${movesNumber} ходов`} onButtonClick={newGameButtonClick} />
                )
            )}
        </div>
    );
}; 