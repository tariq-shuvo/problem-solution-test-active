import axios from 'axios'
import globalConfig from '../config/global.config'
import { CashTransactionType } from "../controller/types/cashTransactionType"

export const cashTransactionOperation = async (receivedInfo: CashTransactionType)=> {
    let cash_in_constant = globalConfig.cashInConstant

    let commission:number = 0

    let cash_out_constant = globalConfig.cashOutConstant

    if(receivedInfo.type==="cash_in"){
        try {
            const response = await axios.get(globalConfig.cashIn)
            if(response.status===200){
                cash_in_constant = {
                    percents: response.data.percents,
                    max: {
                        amount: response.data.max.amount,
                        currency: response.data.max.currency
                    } 
                } 
            }
            commission = receivedInfo.operation.amount * (cash_in_constant.percents/100)
            if(commission>cash_in_constant.max.amount){
                commission = cash_in_constant.max.amount
            }
        } catch (error) {
            console.error(error);
        }
    }else if(receivedInfo.type==="cash_out"){
        try {
            if(receivedInfo.user_type === "natural"){
                const response = await axios.get(globalConfig.cashOutNatural)

                if(response.status===200){
                    cash_out_constant.natural = {
                        percents: response.data.percents,
                        week_limit: {
                            amount: response.data.week_limit.amount,
                            currency: response.data.week_limit.currency
                        }
                    }
                }

                if(receivedInfo.operation.amount>cash_out_constant.natural.week_limit.amount){
                    commission = (receivedInfo.operation.amount - cash_out_constant.natural.week_limit.amount) * (cash_out_constant.natural.percents/100) 
                }
            }else if(receivedInfo.user_type === "juridical"){
                const response = await axios.get(globalConfig.cashOutJuridical)

                if(response.status===200){
                    cash_out_constant.juridical = {
                        percents: response.data.percents,
                        min: {
                            amount: response.data.min.amount,
                            currency: response.data.min.currency
                        }
                    }
                }

                if(receivedInfo.operation.amount>cash_out_constant.juridical.min.amount){
                    commission = receivedInfo.operation.amount * (cash_out_constant.natural.percents/100) 
                }else{
                    commission = 0
                }
            }else{
                throw Error("Invalid transaction user type")
            }
        } catch (error) {
            console.error(error);
        }
    }else{
        throw Error("Invalid transaction type")
    }

    return commission.toFixed(2);  
}