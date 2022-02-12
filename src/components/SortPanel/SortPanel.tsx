import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setSort } from '../../store/reducers/ActionCreators';
import { sortButtons } from '../../const';
import './SortPanel.scss';

const SortPanel: FC = (): JSX.Element => {
    const { sort, error } = useAppSelector(({ticketReducer}) => ticketReducer);
    const dispatch = useAppDispatch();

    return (
        <section className="sort-panel">
            {sortButtons && sortButtons.map(({ name, title }) => (
                <button
                    key={name}
                    type="button"
                    className={`sort-panel__item ${sort === name ? 'active' : ''}`}
                    disabled={!!error}
                    onClick={() => dispatch(setSort(name))}
                >
                    {title}
                </button>
            ))}
        </section>
    );
};

export default SortPanel;