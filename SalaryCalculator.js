const prompt = require('prompt-sync')()
// 4.20 (Salary Calculator) Develop a Java application that determines the gross pay for each of
// three employees. The company pays straight time for the first 40 hours worked by each employee
// and time and a half for all hours worked in excess of 40. You’re given a list of the employees, their
// number of hours worked last week and their hourly rates. Your program should input this information for each employee, then determine and display the employee’s gross pay. Use class Scanner to
// input the data.

hoursWorked = 0
ratePerHour = 0

const salaryCalc = (hoursWorked, ratePerHour)=> {
    if (hoursWorked >= 1 && hoursWorked <= 40){
        grossPay = hoursWorked * ratePerHour;
    }
    if (hoursWorked > 40){
        grossPay = grossPayForHoursAbove40(hoursWorked,ratePerHour);
    }
    return grossPay;
}

const grossPayForHoursAbove40 = (hoursWorked,ratePerHour)=>{
     extraHours = hoursWorked - 40;
    firstFortyHoursWorked = hoursWorked - extraHours;
    payForFirstFortyHours = firstFortyHoursWorked * ratePerHour;
     overtimePay = 1.5 * ratePerHour;
     overtimeBonus = overtimePay * extraHours;
    grossPay = overtimeBonus + payForFirstFortyHours;
    return grossPay;
}

hours =  parseInt(prompt("Enter the number of hours worked: "))
rate =  parseInt(prompt("Enter the rate per hour: "))
salaryRate = salaryCalc(hours, rate)
console.log(`Your gross pay is ${salaryRate}`)