/**
 * Wrapper around the Rust library in this package
 */
// Load the native addon directly from the library's location
import * as path from 'path';

// TODO: codegen from rust to avoid manually keeping them in sync
// maybe https://crates.io/crates/tslink
declare interface Lib {
    subtract: (first: number, second: number) => number;
}

// Resolve the lib.node file relative to this library's location
export const lib: Lib = require(path.resolve(__dirname, 'lib.node'));
