load("@rules_rust//rust:defs.bzl", "rust_shared_library")

rust_shared_library(
    name = "example_rust_napi_nodejs",
    srcs = ["lib.rs"],
    deps = [
        "@crate_index//:napi",
    ],
    proc_macro_deps = [
        "@crate_index//:napi-derive",
    ],
)
