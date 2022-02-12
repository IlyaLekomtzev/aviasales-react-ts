import { SortNames } from '../const';
import { ITicket } from '../models/ITicket';

export const sortTickets = (tickets: ITicket[], sort: SortNames) => {
  if (tickets.length === 0) {
    return [];
  }

  switch (sort) {
    case SortNames.Cheap:
      tickets.sort((a, b) => a.price - b.price);
      break;
    case SortNames.Fast:
      tickets.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
      break;
  }

  return tickets;
};