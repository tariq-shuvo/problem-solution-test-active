interface CashoutType {
    user_id: number,
    data: [
        {
            date: string,
            amount: number
        }
    ]
};

export default CashoutType;