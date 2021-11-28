export interface ITicket {
    price: number,
    carrier: string,
    segments: [
        {
            origin: string,
            destination: string,
            date: string,
            stops: string[],
            duration: number,
        },
        {
            origin: string,
            destination: string,
            date: string,
            stops: string[],
            duration: number,
        }
    ]
}

export interface ITicketResponse {
    tickets: ITicket[],
    stop: boolean
}

export interface ISearchId {
    searchId: string
}