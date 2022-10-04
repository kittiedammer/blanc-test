export interface Client {
    id: number;
    organizationName: string;
    ITN: number;
    date: string;
    accountBalance: number;
    currencyBalance: Currency;
    transactions?: Transaction[];
    phone?: string;
}

export interface Transaction {
    date: string;
    counterparty: string;
    ammount: number;
    type: TransactionType;
}

export enum Currency {
    RUB = "RUB", USD = "USD"
}

export enum TransactionType {
    INBOX = "INBOX", OUTBOX = "OUTBOX"
}