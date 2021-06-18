const prompt = require('prompt-sync')()
//4.19 (Sales Commission Calculator) A large company pays its salespeople on a commission basis.
//        The salespeople receive $200 per week plus 9% of their gross sales for that week. For example, a
//        salesperson who sells $5,000 worth of merchandise in a week receives $200 plus 9% of $5000, or a
//        total of $650. You’ve been supplied with a list of the items sold by each salesperson. The values of
//        these items are as follows:
//        Item Value
//        1 239.99
//        2 129.75
//        3 99.95
//        4 350.89
//        Develop a Java application that inputs one salesperson’s items sold for last week and calculates and
//        displays that salesperson’s earnings. There’s no limit to the number of items that can be sold.

let grossSales = 0
let value = 0



const payWithCommissionCalc = (itemNumber) => {
     try {
          listOfItemsWithTheirPrices(itemNumber);
          if(itemNumber > 4 || itemNumber < 1){
               throw new Error
          }
          grossSales = grossSales + value;
         basePay = 200;
         percentageCommission = 0.9;
          payWithCommission = basePay + percentageCommission * grossSales;
            return payWithCommission;
     } catch (error) {
          console.log("The number you entered is out of range. Enter a number between 1 and 4.")
  
}
}

const listOfItemsWithTheirPrices = (itemNumber) => {

    switch (itemNumber) {
        case 1 :
             value = 239.99;
          break;
        case 2 :
             value = 129.75;
             break;
        case 3 :
             value = 99.95;
             break;
        case 4 :
             value = 350.89;
             break;
    }
    return value;
}


number = parseInt(prompt("Enter an item's number: "))
result =  payWithCommissionCalc(number)
console.log(`The sales person's total earnings is ${result}`)