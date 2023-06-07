module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: "airbnb",
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        indent: [
            "error",
            4,
        ],
        "linebreak-style": [
            "error",
            "windows",
        ],
        quotes: [
            "error",
            "double",
        ],
        semi: [
            "error",
            "always",
        ],
    },
};
