const prompt = require('prompt-sync')()
// 5.12 (Calculating the Product of Odd Integers) Write an application that calculates the product
// of the odd integers from 1 to 15


product = 1
const oddNumProduct = () => {
    for(counter = 1; counter < 16; counter++){
        if(counter % 2 != 0){
            product = product * counter
            console.log(product)
         }   
}

}

oddNumProduct()