import { FC, MouseEvent } from 'react';
import { OFFERS_COUNT } from '../../const';
import './MoreButton.scss';

interface IMoreButtonProps {
    onClick: (e: MouseEvent<HTMLElement>) => void;
}

const MoreButton: FC<IMoreButtonProps> = ({ onClick, ...props }): JSX.Element => {
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