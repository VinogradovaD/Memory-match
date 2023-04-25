import React, { FC } from "react";
import './Result.css';

interface Props {
    text: string;
    onButtonClick: () => void;
}

export const Result: FC<Props> = ({ text, onButtonClick }) => {
    return (
        <div className="result">
            <div className="result__inner">
                <p className="result__text">{ text }</p>
                <button className="result__button" onClick={onButtonClick}>Сыграть еще</button>
            </div>
        </div>
    );
};