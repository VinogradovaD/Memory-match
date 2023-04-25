import  React, { FC } from 'react';
import './Counter.css';

interface Props {
    title: string;
    value: number;
}

export const Counter: FC<Props> = ({ title, value }) => {
    return (
        <div className='counter'>
            <h2 className='counter__title'>{ title }</h2>
            <p className='counter__value'>{ value }</p>
        </div>
    );
}