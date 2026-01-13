// function is a block of code designed to perform a particular task
function funName() {
    // code to be executed
    console.log("This is a function");
}
funName(); //calling the function


// function with parameter and argument
function sum(a, b) { //parameter
    console.log(a + b);
}
sum(2, 3); //argument


function student(name, address) {
    console.log("my name is " + name + " and I live in " + address);
}
student("aryan", "lalitpur");

// function with return keyword
function sum1(a) {
    return a * a
}
let res = sum1(5);
console.log(res);


// ternary operator
console.log(res > 25 ? "good" : "bad");

function radius(r) {
    return 3.14 * r * r;
}
console.log("Area of circle is " + radius(5));


// funciton expression => euta variable ma function assign garne
let abc = function (a)  // anonymous function (no name in function)
{
    return a
}
console.log(abc(6));

// arrow function => es6 ma aayo
// single parameter
let abc1 = (a) => a + a
console.log(abc1(7));

// two parameters
let abc2 = (a, b) => a * b
console.log(abc2(3, 4));

// no parameter
let abc3 = () => console.log("hello world")

//with return keyword and multiple lines
let abc4 = (a, b) => {
    return a * b
}
console.log(abc4(5, 6));

let checkOddEven = (num) => {
    return num % 2 === 0 ? "even" : "odd";
}

console.log(checkOddEven(7));
console.log(checkOddEven(4));

function abcd() {
    return "hey"
}
console.log(abcd());
let efg = () => "hi";

