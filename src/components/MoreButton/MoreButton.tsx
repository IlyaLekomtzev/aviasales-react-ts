import React from 'react';
import { OFFERS_COUNT } from '../../const';
import './MoreButton.scss';

interface IMoreButtonProps {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const MoreButton: React.FC<IMoreButtonProps> = ({ onClick, ...props }): JSX.Element => {
    return (
        <button
            type="button"
            className="offers-list-button"
            onClick={onClick}
            {...props}
        >
            Показать еще {OFFERS_COUNT} билетов!
        </button>
    );
}

export default MoreButton;