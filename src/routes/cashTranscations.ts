import { Router } from 'express'
import { check } from 'express-validator'

import { cashTransaction } from '../controller/cashTransactions'

const router = Router()

router.post('/', [
    check('date', 'date(yyyy-mm-dd) format is required').isDate(),
    check('user_id', 'user id is required and integer value.').trim().isInt(),  
    check('user_type', 'user type will be one of “natural”(natural person) or “juridical”(legal person)').custom(value => {
        if (value==="natural" || value==="juridical") {
            return true;
        }else{
            return false;
        }
    }),  
    check('type', 'transcation type will be cash_in or cash_out is required').custom(value => {
        if (value==="cash_in" || value==="cash_out") {
            return true;
        }else{
            return false;
        }
    }),  
    check('operation.amount', 'amount should be numeric').isNumeric(),  
    check('operation.currency', 'operation currency `EUR`').custom(value => {
        if (value==="EUR") {
            return true;
        }else{
            return false;
        }
    }),  
], cashTransaction)

export default router