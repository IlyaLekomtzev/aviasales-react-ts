import { FC } from 'react';
import { OfferItem, MoreButton } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { incrementStep, getTickets } from '../../store/reducers/ActionCreators';
import { SortNames, OFFERS_COUNT } from '../../const';
import { sortTickets } from '../../utils/sort';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './OffersList.scss';

const OffersList: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { tickets, isLoading, error, step, sort, filters } = useAppSelector(({ticketReducer}) => ticketReducer);

    const renderTickets = () => {
        if (isLoading) {
            return Array(OFFERS_COUNT)
                    .fill(0)
                    .map((_, index) => <Skeleton key={index} height={192} borderRadius={5} style={{marginTop: '20px'}} />)
        }

        if (!error) {
            let sortedTickets = [...tickets];

            if (filters.length > 0) {
                sortedTickets = sortedTickets.filter((item) => filters.includes(item.segments[0].stops.length + item.segments[1].stops.length + ''));
            }
    
            sortedTickets = sortTickets(sortedTickets, sort);
    
            if (sortedTickets.length === 0) {
                return <span className="error">Нет предложений</span>;
            }
    
            return (
                sortedTickets
                    .slice(0, step * OFFERS_COUNT)
                    .map((offer, i) => <OfferItem key={i} offer={offer} />)
            );
        } else {
            return <span className="error">{error}</span>;
        }
    };

    const renderButton = () => {
        if (error) {
            return '';
        }

        if (tickets.length > step * OFFERS_COUNT) {
            return <MoreButton onClick={() => dispatch(incrementStep())} />;
        } else {
            return <MoreButton onClick={() => dispatch(getTickets())} />;
        }
    };

    return (
        <>
            <section className="offers-list">
                {renderTickets()}
            </section>

            {renderButton()}
        </>
    );
};

export default OffersList;