// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...






// SORRY I KNOW IT'S LESS READABLE, BUT FOR A SAKE OF THE TEST I DECIDED TO
// MAKE IT THINNER
const zero = (func) => func ? func(0) : 0;
const one = (func) => func ? func(1) : 1;
const two = (func) => func ? func(2) : 2;
const three = (func) => func ? func(3) : 3;
const four = (func) => func ? func(4) : 4;
const five = (func) => func ? func(5) : 5;
const six = (func) => func ? func(6) : 6;
const seven = (func) => func ? func(7) : 7;
const eight = (func) => func ? func(8) : 8;
const nine = (func) => func ? func(9) : 9;

const plus = (b) => (a) => a + b;
const minus = (b) => (a) => a - b;
const times = (b) => (a) => a * b;
const dividedBy = (b) => (a) => a / b;

export const calculationWithFunctions = {
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    plus,
    minus,
    times,
    dividedBy
};

export default calculationWithFunctions;
