const prompt = require('prompt-sync')()
// 5.13 (Factorials) Factorials are used frequently in probability problems. The factorial of a positive
// integer n (written n! and pronounced “n factorial”) is equal to the product of the positive integers from
// 1 to n. Write an application that calculates the factorials of 1 through 20. Use type long. Display the
// results in tabular format. What difficulty might prevent you from calculating the factorial of 100?


extractedNum = 0
productOfExtractedNum = 1

const numFactorial  = (number) => {
    
    while(extractedNum < number && extractedNum != number  ){
       extractedNum = 1 + extractedNum
       productOfExtractedNum = extractedNum * productOfExtractedNum  
    }
    
    factorial =  productOfExtractedNum 
    console.log(factorial)
}


number = parseInt(prompt("Enter a number: "))
numFactorial(number)