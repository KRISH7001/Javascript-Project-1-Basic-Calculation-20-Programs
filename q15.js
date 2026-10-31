"use strict";
let ElectricUnit = 103;
let Bill;
if (ElectricUnit <= 100) {
    Bill = ElectricUnit * 5;
}
else {
    Bill = ElectricUnit * 8;
}
console.log(`Electricity Bill is:- ${Bill}`);