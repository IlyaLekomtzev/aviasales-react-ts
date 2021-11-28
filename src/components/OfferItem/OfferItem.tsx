import React from 'react';
import { ITicket } from '../../models/ITicket';
import { getPeriodTime, getTravelTime } from '../../utils/datetime';
import './OfferItem.scss';

interface IOfferItemProps {
    offer: ITicket
}

const OfferItem: React.FC<IOfferItemProps> = ({ offer }): JSX.Element => {
    return (
        <div className="offer-item">
            <div className="offer-item__header">
                <div className="offer-item__price">{offer.price.toLocaleString()} Р</div>
                <div className="offer-item__logo">
                    <img src={`https://pics.avs.io/99/36/${offer.carrier}.png`} alt="s7"/>
                </div>
            </div>
            <div className="offer-item__body">
                {offer.segments && offer.segments.map((segment, i) => (
                    <div className="offer-item__way" key={segment.date + i}>
                        <div className="offer-item__info">
                            <div className="offer-item__info-title">{segment.origin} – {segment.destination}</div>
                            <div className="offer-item__info-value">{getPeriodTime(segment.date, segment.duration)}</div>
                        </div>
                        <div className="offer-item__info">
                            <div className="offer-item__info-title">В пути</div>
                            <div className="offer-item__info-value">{getTravelTime(segment.duration)}</div>
                        </div>
                        <div className="offer-item__info">
                            <div className="offer-item__info-title">Пересадки: {segment.stops.length}</div>
                            <div className="offer-item__info-value">{segment.stops.length > 0 ? segment.stops.join(', ') : '-'}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferItem;