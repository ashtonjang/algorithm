// .eslintrc.js
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "moment": true,
        "$": true,
        "_": true,
        "angular": true,
        "nhn": true,
        "ax5": true,
        "agGrid": true,
        "require": true,
        "module": true,
        "ENV": true,
        "global": true,
        "__dirname": true,
        "process": true,
        "exports": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console": "off",
        "global-require": 0,
        "indent": [
            "error",
            4
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    }
};