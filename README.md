# Requirements

- install node js from [here](https://nodejs.org/en/)
- npm install for installing node_modules
- If your PC don't have typescript packages please run this cmd
  - npm install -g typescript
- Type "tsc" for compile typescript to ES5 to "dist" folder
- To run this project please run "npm start"
- To test project please run "npm run test". In this project i have used "mocha" and "chai" for unit testing.

# Description

After run this project by typing "npm start"

#### API
A post request for checking form validations and getting the result
sample raw json data
# operation date in format `Y-m-d`
# user id, integer
# user type, one of “natural”(natural person) or “juridical”(legal person)
# operation type, one of “cash_in” or “cash_out”
# operation amount(for example `2.12` or `3`)
# operation currency `EUR`

```js
{
    "date": "2016-01-05",
    "user_id": 1,
    "user_type": "natural", 
    "type": "cash_in", 
    "operation": {
        "amount": 200,
        "currency": "EUR" 
    }
}
```
You can post data to [http://localhost:3000/cash-transaction](http://localhost:3000/cash-transaction)

# Example Data

Example data has been placed in json file location at root of the project when run "npm start" you will get output in console

input.json
[
    { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 30000, "currency": "EUR" } },
     { "date": "2016-01-07", "user_id": 1, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } },
    { "date": "2016-01-07", "user_id": 1, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 100.00, "currency": "EUR" } },
    { "date": "2016-01-10", "user_id": 1, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 100.00, "currency": "EUR" } },
    { "date": "2016-01-10", "user_id": 2, "user_type": "juridical", "type": "cash_in", "operation": { "amount": 1000000.00, "currency": "EUR" } },
    { "date": "2016-01-10", "user_id": 3, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } },
    { "date": "2016-02-15", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },
]

➜  output in console
0.06
0.90
87.00
3.00
0.30
0.30
5.00
0.00
0.00
