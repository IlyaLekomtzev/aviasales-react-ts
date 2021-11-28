import api from '../../services/api';
import { AppDispatch } from '../store';
import { ITicketResponse, ISearchId } from '../../models/ITicket';
import { ticketSlice } from './TicketSlice';
import { SortNames } from '../../const';

export const getTickets = () => async (dispatch: AppDispatch) => {
    dispatch(ticketSlice.actions.ticketsGetting());

    let searchId = await getSearchId();
    if (!searchId) {
        dispatch(ticketSlice.actions.ticketsGettingFailure());
        return;
    }

    try {
        const { data } = await api.get<ITicketResponse>(`/tickets?searchId=${searchId}`);
        dispatch(ticketSlice.actions.ticketsGettingSuccess(data));
    } catch (e) {
        dispatch(ticketSlice.actions.ticketsGettingFailure());
    }
}

export const incrementStep = () => (dispatch: AppDispatch) => {
    dispatch(ticketSlice.actions.incrementStep());
}

export const setSort = (sort: SortNames) => (dispatch: AppDispatch) => {
    dispatch(ticketSlice.actions.setSort(sort));
}

export const setFilter = (filter: string[]) => (dispatch: AppDispatch) => {
    dispatch(ticketSlice.actions.setFilter(filter));
}

const getSearchId = async () => {
    try {
        const { data } = await api.get<ISearchId>('/search');
        return await data.searchId;
    } catch (e) {
        console.error(e);
        return false;
    }
}