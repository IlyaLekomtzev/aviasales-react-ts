import { FC, ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setFilter } from '../../store/reducers/ActionCreators';
import { filtersValues } from '../../const';
import './FiltersSidebar.scss';

const FiltersSidebar: FC = (): JSX.Element => {
    const { filters, error } = useAppSelector(({ticketReducer}) => ticketReducer);
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(setFilter([...filters, e.target.value]));
        } else {
            dispatch(setFilter(filters.filter(item => item !== e.target.value)));
        }
    };

    return (
        <aside className="filters-sidebar">
            <div className="filters-sidebar__title">Количество пересадок</div>
            <div className="filters-sidebar__checkboxes">
                <label htmlFor="filter-all" className="filters-sidebar__checkbox">
                    <input
                        type="checkbox"
                        name="filter"
                        id="filter-all"
                        className="filters-sidebar__checkbox-input"
                        value="0"
                        checked={!filters.length}
                        disabled={!!error}
                        onChange={() => dispatch(setFilter([]))}
                    />
                    <span className="filters-sidebar__checkbox-text">Все</span>
                </label>
                {filtersValues.map(({title, value}) => (
                    <label htmlFor={`filter-${value}`} className="filters-sidebar__checkbox">
                        <input
                            type="checkbox"
                            name="filter"
                            id={`filter-${value}`}
                            className="filters-sidebar__checkbox-input"
                            value={value}
                            checked={filters.includes(value+'')}
                            disabled={!!error}
                            onChange={handleChange}
                        />
                        <span className="filters-sidebar__checkbox-text">{title}</span>
                    </label>
                ))}
            </div>
        </aside>
    );
};

export default FiltersSidebar;