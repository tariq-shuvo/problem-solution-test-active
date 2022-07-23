import express, { Request, Response, NextFunction } from 'express'

import { json } from 'body-parser'

import cashTranscationRoutes from './routes/cashTranscations'

const port = 3000;
const app = express()

app.use(json())

app.use('/cash-transaction', cashTranscationRoutes)

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    return res.status(500).json({
        message: err.message
    })
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})