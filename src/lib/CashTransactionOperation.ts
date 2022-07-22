import { CashTransactionType } from "../controller/types/cashTransactionType"

export const cashTransactionOperation = async (receivedInfo: CashTransactionType)=> {
    if(receivedInfo.type==="cash_in"){
       
    }else if(receivedInfo.type==="cash_out"){

    }else{
        throw Error("Invalid transaction type")
    }
    return 0
}