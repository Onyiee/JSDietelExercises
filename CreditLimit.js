const prompt = require('prompt-sync')()
//4.18 (Credit Limit Calculator) Develop a Java application that determines whether any of several
//        department-store customers has exceeded the credit limit on a charge account. For each customer,
//        the following facts are available:
//        a) account number
//        b) balance at the beginning of the month
//        c) total of all items charged by the customer this month
//        d) total of all credits applied to the customer’s account this month
//        e) allowed credit limit.
//        The program should input all these facts as integers, calculate the new balance (= beginning balance
//        + charges – credits), display the new balance and determine whether the new balance exceeds the
//        customer’s credit limit. For those customers whose credit limit is exceeded, the program should display
//        the message "Credit limit exceeded".


const allowedCreditLimitCalc = ( newBalance) => {
     allowedCreditLimit = 0.1 * newBalance;
    //  balanceChecker(newBalance, totalCreditsAppliedFor)
    return allowedCreditLimit;
}


const newBalanceCalc = ( beginningBalance, totalItemsCharged, totalCreditsAppliedFor) => {
     newBalance = beginningBalance + totalItemsCharged - totalCreditsAppliedFor;
    return newBalance;
}

// const balanceChecker = (newBalance, totalCreditsAppliedFor) => {
//     if(newBalance > totalCreditsAppliedFor){
//         console.log("Credit limit exceeded")
//     }
// }

let newBalance = parseInt(prompt("Enter a value for the new balance: "))
ans = allowedCreditLimitCalc(newBalance)

let beginningBalance = parseInt(prompt("Enter a value for the beginning balance: "))
let totalItemsCharged = parseInt(prompt("Enter a value for the the total items charged: "))
let totalCreditsAppliedFor = parseInt(prompt("Enter a value for the the total credits applied for: "))
result = newBalanceCalc(beginningBalance, totalItemsCharged, totalCreditsAppliedFor)
console.log(result)