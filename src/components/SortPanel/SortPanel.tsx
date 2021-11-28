import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setSort } from '../../store/reducers/ActionCreators';
import { sortButtons } from '../../const';
import './SortPanel.scss';

const SortPanel: React.FC = (): JSX.Element => {
    const sort = useAppSelector(({ticketReducer}) => ticketReducer.sort);
    const dispatch = useAppDispatch();

    return (
        <section className="sort-panel">
            {sortButtons && sortButtons.map(({ name, title }) => (
                <button
                    key={name}
                    type="button"
                    className={`sort-panel__item ${sort === name && 'active'}`}
                    onClick={() => dispatch(setSort(name))}
                >
                    {title}
                </button>
            ))}
        </section>
    );
};

export default SortPanel;