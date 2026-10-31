"use strict";
let totalAmount = 5100;
let FinalBill;
if (totalAmount > 5000) {
    FinalBill = totalAmount - (totalAmount * 15 / 100);
}
else {
    FinalBill = totalAmount - (totalAmount * 5 / 100);
}
console.log(`Total Amount:- ${totalAmount}`);
console.log(`Discounted Bill:- ${FinalBill}`);