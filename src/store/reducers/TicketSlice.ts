import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITicket, ITicketResponse } from '../../models/ITicket';
import { SortNames } from '../../const';

interface TicketState {
    searchId: string,
    tickets: ITicket[],
    isLoading: boolean,
    error: string,
    step: number,
    stop: boolean,
    sort: SortNames,
    filters: string[],
}

const initialState: TicketState = {
    searchId: '',
    tickets: [],
    isLoading: false,
    error: '',
    step: 1,
    stop: false,
    sort: SortNames.Cheap,
    filters: [],
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        ticketsGetting(state) {
            state.isLoading = true;
        },
        ticketsGettingSuccess(state, action: PayloadAction<ITicketResponse>) {
            state.tickets = [...state.tickets, ...action.payload.tickets];
            state.isLoading = false;
            state.error = '';
            state.stop = action.payload.stop;
        },
        ticketsGettingFailure(state) {
            state.isLoading = false;
            state.error = 'Не удалось получить предложения!';
        },
        incrementStep(state) {
            state.step += 1;
        },
        setSort(state, action: PayloadAction<SortNames>) {
            state.sort = action.payload;
        },
        setFilter(state, action: PayloadAction<string[]>) {
            state.filters = action.payload;
        }
    }
});

export default ticketSlice.reducer;