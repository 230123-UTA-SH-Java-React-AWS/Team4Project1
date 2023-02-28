import { Transaction } from "./Transaction";

export interface Account {
    id: number,
    userId: number,
    name: string,
    balance: number,
    type: string,
    transactions:Transaction[]
}