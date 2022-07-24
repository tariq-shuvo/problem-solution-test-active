import { cashTransactionOperation } from './lib/CashTransactionOperation';
import express, { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import { json } from 'body-parser'

import cashTranscationRoutes from './routes/cashTranscations'

const port = 3000;
const app = express()

app.use(json())

fs.readFile("./input.json", "utf8", async (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    
    let jsonDataList = JSON.parse(jsonString);
    for(let i=0; i<jsonDataList.length; i++){
        let result = await cashTransactionOperation(jsonDataList[i])
        console.log(result)
    }
});

app.use('/cash-transaction', cashTranscationRoutes)

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    return res.status(500).json({
        message: err.message
    })
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})