#![deny(clippy::all)]

use napi_derive::napi;

#[napi]
pub fn subtract(first: u32, second: u32) -> u32 {
  first - second
}
