import React from 'react';
import { OfferItem, MoreButton } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { incrementStep, getTickets } from '../../store/reducers/ActionCreators';
import { SortNames, OFFERS_COUNT } from '../../const';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './OffersList.scss';

const OffersList: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { tickets, isLoading, error, step, sort, filters } = useAppSelector(({ticketReducer}) => ticketReducer);

    const renderTickets = () => {
        let sortTickets = [...tickets];

        if (filters.length > 0) {
            sortTickets = sortTickets.filter((item) => filters.includes(item.segments[0].stops.length + item.segments[1].stops.length + ''));
        }

        switch (sort) {
            case SortNames.Cheap:
                sortTickets.sort((a, b) => a.price - b.price);
                break;
            case SortNames.Fast:
                sortTickets.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
                break;
        }

        if (sortTickets.length === 0) {
            return <span className="error">Нет предложений</span>;
        }

        return (
            sortTickets.slice(0, step * OFFERS_COUNT).map((offer, i) => (
                <OfferItem key={i} offer={offer} />
            ))
        );
    }

    return (
        <>
            <section className="offers-list">
                {isLoading &&
                    Array(OFFERS_COUNT)
                    .fill(0)
                    .map((_, index) => <Skeleton key={index} height={192} borderRadius={5} style={{marginTop: '20px'}} />)
                }
                {error && <span className="error">{error}</span>}

                {renderTickets()}
            </section>

            {tickets.length > step * OFFERS_COUNT ? (
                <MoreButton onClick={() => dispatch(incrementStep())} />
            ) : (
                <MoreButton onClick={() => dispatch(getTickets())} />
            )}
        </>
    );
};

export default OffersList;