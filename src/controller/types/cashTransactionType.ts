export class CashTransactionType {
    constructor(public date: string,public user_id: number,public user_type: string,public type: string,public operation:{
        amount: number,
        currency: string
    }) {}
}