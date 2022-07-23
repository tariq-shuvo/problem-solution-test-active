import { RequestHandler } from 'express'
import { validationResult } from 'express-validator'
import { cashTransactionOperation } from '../lib/CashTransactionOperation'
import { CashTransactionType } from './types/cashTransactionType'
import globalConfig from '../config/global.config'

export const cashTransaction:RequestHandler = async (req, res, next) => {
    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        })
    }

    const date = (req.body as {date: string}).date
    const user_id = (req.body as {user_id: number}).user_id
    const user_type = (req.body as {user_type: string}).user_type
    const type = (req.body as {type: string}).type
    const operation = (req.body as {operation:{
        amount:number,
        currency: string
    }}).operation

    try {
        let requestParams = new CashTransactionType(
            date,
            user_id,
            user_type,
            type,
            operation
        )
        let result:number = Number(await cashTransactionOperation(requestParams))

        let isCent:boolean = false

        if(result<1 && result !== 0){
            result = Math.ceil(100*result)/100
            isCent = true
        }
        let cash_in_constant = globalConfig.cashInConstant
        let output = isCent ? (result.toFixed(2)+` cents ${cash_in_constant.max.currency}`) : result.toFixed(2) +` ${cash_in_constant.max.currency}`
        return res.status(200).json({
            result: output
        })
    } catch (error:any) {
        throw new Error(error)
    }
}