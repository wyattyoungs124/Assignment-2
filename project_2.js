
//Section 1
"use strict";
const PROMPT = require('readline-sync');


//Section 2
let lastName, firstName;
let polNum, dueDate, birthDate, atFault;
let custAge, premium;

const BASE_PRICE = 100;
const AT_FAULT_PEN = 50;
const LT_30 = 20;
const LT_45 = 10;
const GT_60 = 30;


//Section 3
function main() {
setPolNumb();
setFirstName();
setLastName();
setBirthDate();
setDueDate();
setAtFault();
setAge();
calculatePremium();
displayResults();
}

main();


//Section 4
function setPolNumb(){
    polNum = PROMPT.question("Enter Policy Number: ");
    polNum = parseInt(polNum);
    if(isNaN(polNum)) {
        console.log("ERROR: Policy Number must be a number!");
        return setPolNumb();
    }
}

function setFirstName() {
    firstName = PROMPT.question("Enter your first name: ");
    if(firstName.length === 0) {
        console.log("ERROR: First name is empty! ");
        return setFirstName();
    }
}

function setLastName(){
    lastName = PROMPT.question("Enter your last name: ");
    if(lastName.length === 0) {
        console.log("ERROR: Last name is empty! ");
        return setLastName();
    }
}

function setBirthDate() {
    birthDate = PROMPT.question("Enter Birth Date (MM/DD/YYYY): ");
    birthDate = new Date(birthDate);
    if(isNaN(birthDate.getTime())) {
        console.log("ERROR: Date was invalid. Try again.");
        return setBirthDate();
    }
}

function setDueDate(){
    dueDate = PROMPT.question("Enter due date (MM/DD/YYYY): ");
    dueDate = new Date(dueDate);
    if(isNaN(dueDate.getTime())) {
        console.log("ERROR: Date was invalid. Try again.");
        return setDueDate();
    }
}

function setAtFault(){
    atFault = PROMPT.question("Enter number of at fault accidents in the last three years: ");
    atFault = parseInt(atFault);
    if(isNaN(atFault)) {
        console.log("ERROR: Your input must be a number!");
        return setAtFault();
    }
}

function setAge() {
    let delta = Date.now() - birthDate.getTime();
    let age_delta = new Date(delta);
    custAge = Math.abs(age_delta.getUTCFullYear() - 1970);
}

function calculatePremium(){
    premium = BASE_PRICE + atFault * AT_FAULT_PEN;
    switch(true) {
        case custAge > 15 && custAge < 30:
            premium += LT_30;
            break;
        case custAge >= 30 && custAge < 45:
            premium += LT_45;
            break;
        case custAge >= 60:
            premium += GT_60;
            break;
    }
}

function displayResults() {
    console.log("Your monthly insurance premium is $" +premium);
}