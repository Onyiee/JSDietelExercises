const prompt = require('prompt-sync')()
// 4.17 (Gas Mileage) Drivers are concerned with the mileage their automobiles get. One driver has
// kept track of several trips by recording the miles driven and gallons used for each tankful. Develop
// a Java application that will input the miles driven and gallons used (both as integers) for each trip.
// The program should calculate and display the miles per gallon obtained for each trip and print the
// combined miles per gallon obtained for all trips up to this point. All averaging calculations should
// produce floating-point results. Use class Scanner and sentinel-controlled repetition to obtain the
// data from the user.

let totalMilesPerGallon = 0
milesDriven = 0

const gasMileage = ( milesDriven, gallonsUsed) => {
     milesPerGallon = milesDriven/gallonsUsed;
    setTotalMilesPerGallon(milesPerGallon);
    return milesPerGallon;
}

const setTotalMilesPerGallon = ( milesPerGallon) => {
     totalMilesPerGallon = totalMilesPerGallon + milesPerGallon;
}


while(milesDriven != -1){
    let milesDriven = parseInt(prompt("Enter a value for miles driven: "))
    let gallonsUsed = parseInt(prompt("Enter a value for gallons used: "))
    result = gasMileage(milesDriven, gallonsUsed)
    console.log(result)
}


