/**
 * Wrapper around the Rust library in this package
 */
// TODO: codegen from adder.h to avoid manually keeping them in sync
declare interface Minus {
    subtract: (first: number, second: number) => number;
}

// Load the native addon directly from the Bazel runfiles
export const minus = require('bindings')('minus');
