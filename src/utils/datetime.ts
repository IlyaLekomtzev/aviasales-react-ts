import moment from 'moment';
import 'moment/locale/ru';

export const getPeriodTime = (date: string, duration: number) => {
    const time = moment(date);
    return time.format('h:mm') + ' - ' + time.add(duration, 'minutes').format('h:mm');
};

export const getTravelTime = (duration: number) => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return hours + 'ч ' + minutes + 'м';
};
