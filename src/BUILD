load("@rules_rust//rust:defs.bzl", "rust_shared_library")
load("@aspect_bazel_lib//lib:copy_file.bzl", "copy_file")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")
rust_shared_library(
    name = "minus_binding",
    srcs = ["lib.rs"],
    deps = [
        "@crate_index//:napi",
        "@rules_nodejs//nodejs/headers:current_node_cc_headers",
    ],
    proc_macro_deps = [
        "@crate_index//:napi-derive",
    ],
    rustc_flags = select({
        "@platforms//os:macos": ["--codegen=link-arg=-undefined", "--codegen=link-arg=dynamic_lookup"],
        "//conditions:default": [],
    }),
)

# Need to rename the file from .so/.dylib to .node for Node.js
copy_file(
    name = "copy_binding",
    src = ":minus_binding",
    out = "build/lib.node",
    visibility = ["//visibility:public"],
)

ts_project(
    name = "ts_wrapper",
    srcs = ["lib.ts"],
    declaration = True,
    deps = [
        ":node_modules/bindings",
        ":node_modules/@types",
    ],
    visibility = ["//visibility:public"],
)

js_library(
    name = "pkg",
    srcs = ["lib.js", "lib.d.ts", "package.json"],
    visibility = ["//visibility:public"],
)
