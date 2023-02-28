import { Account } from "./Account";

export interface User {
    id:number,
    fname?:string,
    lname?:string,
    address?:string,
    username:string | null,
    email:string | null,
    password:string,
    accounts: Account[]
}
//