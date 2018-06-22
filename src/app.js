import { add, subtract, multiply, divide } from "../src/my-math";
import { SomeLib } from "../src/some-lib";

let lib = new SomeLib();

lib.sayHello();

console.log("Add:", add(2, 3));
console.log("Subtract: " , subtract(4, 2));
console.log("Multiply: ", multiply(2, 3));
console.log("Divide: ", divide(10, 2));
