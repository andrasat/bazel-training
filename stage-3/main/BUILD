load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_library")

cc_library(
    name = "greet",
    srcs = ["greet.cc"],
    hdrs = ["greet.h"],
)

cc_binary(
    name = "main",
    srcs = ["main.cc"],
    deps = [
        ":greet",
        "//lib:time",
    ],
)
