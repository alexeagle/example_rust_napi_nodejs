import { minus } from "minus";

function math_operation(a: number, b: number): number {
    return minus.subtract(a, b);
}

// Example usage
console.log(`10 - 5 = ${math_operation(10, 5)}`);
