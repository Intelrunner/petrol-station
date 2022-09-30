import { v4 as uuidv4 } from 'uuid';

const fuelTypes = ['diesel', 'regular', 'electric', 'premium']
let getFuel = fuelTypes[getRandomInt(0, fuelTypes.length)];

/* rng for fuel type */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}



/*  Customer Logic / Methods */
class Customer {
    constructor(
        id,
        needsGas,
        tankSize,
        tankLevel) {
        this.id = uuidv4();
        this.needsGas = Math.random() <= 0.5;
        this.tankSize = getRandomInt(10, 20);
        this.tankLevel = getRandomInt(0, this.tankSize);
        this.fuel = getFuel;
    }
}

let x = new Customer();
console.log(x);

function buildCustomer() { };
function singleEvent() { };

/* 

/* fuel random type to be assigned per vehicle */

