# LoanQualificationChecker

Build a Loan Qualification Checker Project.

## Source Code

```js
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if (
    creditScore >= minCreditScoreForDuplex &&
    annualIncome >= minIncomeForDuplex
  ) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (
    annualIncome >= minIncomeForCondo &&
    creditScore >= minCreditScoreForCondo
  ) {
    return "You qualify for a condo and car loan.";
  } else if (
    annualIncome >= minIncomeForCar &&
    creditScore >= minCreditScoreForCar
  ) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

const duplexLoanMsg = getLoanMessage(65000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
```

## Output

![Image](https://github.com/user-attachments/assets/1da7a32a-197d-42e6-8f54-7d9c40c62581)
