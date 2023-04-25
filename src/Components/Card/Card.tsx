import React, { FC } from "react";
import './Card.css';
import cover from '../../images/cover.png';

interface Props {
    id: number;
    image: string;
    status: 'open' | 'closed' | 'hidden';
    onClick: (id: number) => void,
}

export const Card: FC<Props> = ({ id, image, status = 'closed', onClick }) => {
    return (
        <div 
            className={`
                card 
                ${status === 'hidden' ? 'card_hidden' : ''} 
                ${status === 'closed' ? 'card_blue' : ''}
            `}
            onClick={() => onClick(id)}
        >
            {status === 'open' ? (
                <img className="card__image" src={image} alt="img"/>
            ) : (
                <img className="card__cover" src={cover} alt="cover"/>
            )}
        </div>
    );
} 