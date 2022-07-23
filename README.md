# Requirements

- install node js from [here](https://nodejs.org/en/)
- npm install for installing node_modules
- If your PC don't have typescript packages please run this cmd
  - npm install -g typescript
- "tsc" for compile typescript to ES5 to "dist" folder
- To run this project please run "npm start"
- To test project please run "npm run test". In this project i have used "mocha" and "chai" for unit testing.

# Description

## Situation

## Commission Fees

### For Cash In

Commission fee - 0.03% from total amount, but no more than 5.00 EUR.

You can get configuration from [API](http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in)

### For Cash Out

There are different commission fees for cash out for natural and legal persons.

#### Natural Persons

Default commission fee - 0.3% from cash out amount.

1000.00 EUR per week (from monday to sunday) is free of charge.

If total cash out amount is exceeded - commission is calculated only from exceeded amount (that is, for 1000.00 EUR there is still no commission fee).

You can get configuration from [API](http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural)

#### Legal persons

Commission fee - 0.3% from amount, but not less than 0.50 EUR for operation.

You can get configuration from [API](http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical)

### Rounding

After calculating commission fee, it's rounded to the smallest currency item (for example, for EUR currency - cents) to upper bound (ceiled). For example, 0.023 EUR should be rounded to 3 Euro cents.

## Input data

Input data is given in JSON file. Performed operations are given in that file. In each object following data is provided:

```js
{
    "date": "2016-01-05", // operation date in format `Y-m-d`
    "user_id": 1, // user id, integer
    "user_type": "natural", // user type, one of “natural”(natural person) or “juridical”(legal person)
    "type": "cash_in", // operation type, one of “cash_in” or “cash_out”
    "operation": {
        "amount": 200, // operation amount(for example `2.12` or `3`)
        "currency": "EUR" // operation currency `EUR`
    }
}
```

All operations are ordered by their date ascendingly.

## Expected Result

As a single argument program must accept a path to the input file.

Program must output result to stdout.

Result - calculated commission fees for each operation. In each line only final calculated commission fee must be provided without currency.

# Example Data

```
➜  cat input.json
[
    { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 30000, "currency": "EUR" } },
     { "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } },
    { "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 100.00, "currency": "EUR" } },
    { "date": "2016-01-10", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 100.00, "currency": "EUR" } },
    { "date": "2016-01-10", "user_id": 2, "user_type": "juridical", "type": "cash_in", "operation": { "amount": 1000000.00, "currency": "EUR" } },
    { "date": "2016-01-10", "user_id": 3, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } },
    { "date": "2016-02-15", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },
]

➜  node app.js input.json
0.06
0.90
87.00
3.00
0.30
0.30
5.00
0.00
0.00
```

# Evaluation Criteria

- all requirements must be met;
- code quality - it's maintainability, extensibility, testability; speed of the system can also be considered, but is not as important as other criteria.

# Task Submission

You can put the code publicly (in github or similar code control systems) if you want, but please note the requirement about Paysera name usage.

Send it in your favourite format (link to versioned code, code in zip file etc.) to one of the following emails based on your city, unless instructed otherwise:

- code-afr@paysera.com, if you've been asked to send the task to this email (not depending upon the city)
- code-zd@paysera.com, if you've been asked to send the task to this email (not depending upon the city)
- code-vilnius@paysera.com
- code-kaunas@paysera.com
- code-sofia@paysera.com
- code-manila@paysera.com
- code-dhaka@paysera.com
- code-saint-petersburg@paysera.com
- code-plovdiv@paysera.com
