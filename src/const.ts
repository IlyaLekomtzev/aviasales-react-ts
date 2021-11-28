import { IFiltersValue } from './models/IFilters';

export enum SortNames {
    Cheap = 'cheap',
    Fast = 'fast',
    Optimal = 'optimal'
};

export const sortButtons = [
    {
        name: SortNames.Cheap,
        title: 'Самый дешевый'
    },
    {
        name: SortNames.Fast,
        title: 'Самый быстрый'
    },
    {
        name: SortNames.Optimal,
        title: 'Оптимальный'
    },
];

export const filtersValues: IFiltersValue[] = [
    {
        title: 'Без пересадок',
        value: 0,
    },
    {
        title: '1 пересадка',
        value: 1,
    },
    {
        title: '2 пересадки',
        value: 2,
    },
    {
        title: '3 пересадки',
        value: 3,
    },
];

export const OFFERS_COUNT = 5;