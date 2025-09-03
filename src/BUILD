load("@rules_rust//rust:defs.bzl", "rust_shared_library")

rust_shared_library(
    name = "example_rust_napi_nodejs",
    srcs = ["lib.rs"],
    deps = [
        "@crate_index//:napi",
        "@rules_nodejs//nodejs/headers:current_node_cc_headers",
    ],
    proc_macro_deps = [
        "@crate_index//:napi-derive",
    ],
    rustc_flags = ["--codegen=link-arg=-undefined", "--codegen=link-arg=dynamic_lookup"],
)
