import { expect } from 'chai';
import { cashTransactionOperation } from '../lib/CashTransactionOperation';

describe('input and output sample validation check', () => {
    it('check the validation for cash in transaction', async ()=>{
        expect(await cashTransactionOperation({ "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.00, "currency": "EUR" } })).to.equal((0.06).toFixed(2)),
        expect(await cashTransactionOperation({ "date": "2016-01-10", "user_id": 2, "user_type": "juridical", "type": "cash_in", "operation": { "amount": 1000000.00, "currency": "EUR" } })).to.equal((5).toFixed(2))
    })

    it('check the validation for cash out transaction', async ()=>{
        expect(await cashTransactionOperation({ "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } })).to.equal((0.90).toFixed(2)),
        expect(await cashTransactionOperation({ "date": "2016-01-06", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 30000, "currency": "EUR" } })).to.equal((87).toFixed(2)),
        expect(await cashTransactionOperation({ "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } })).to.equal((3).toFixed(2)),
        expect(await cashTransactionOperation({ "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 100.00, "currency": "EUR" } })).to.equal((0.30).toFixed(2)),
        expect(await cashTransactionOperation({ "date": "2016-01-10", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 100.00, "currency": "EUR" } })).to.equal((0.30).toFixed(2)),
        expect(await cashTransactionOperation({ "date": "2016-01-10", "user_id": 3, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } })).to.equal((0).toFixed(2)),
        expect(await cashTransactionOperation({ "date": "2016-02-15", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } })).to.equal((0).toFixed(2))
    })
})