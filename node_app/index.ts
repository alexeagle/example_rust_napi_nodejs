import { lib } from "lib";

function math_operation(a: number, b: number): number {
    return lib.subtract(a, b);
}

// Example usage
console.log(`10 - 5 = ${math_operation(10, 5)}`);
