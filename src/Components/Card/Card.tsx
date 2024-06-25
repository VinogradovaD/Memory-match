import React, { FC } from "react";
import './Card.css';

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
                <div className="card__cover" />
            )}
        </div>
    );
} 