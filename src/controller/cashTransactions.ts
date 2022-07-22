import { RequestHandler } from 'express'
import { validationResult } from 'express-validator'
import { cashTransactionOperation } from '../lib/CashTransactionOperation'
import { CashTransactionType } from './types/cashTransactionType'

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
        cashTransactionOperation(requestParams)
        // newTodo = await TodoModel.create()
    } catch (error:any) {
        throw new Error(error)
    }

    return res.status(201).json({
        message: 'Todo is created.',
        // data: newTodo
    })
}