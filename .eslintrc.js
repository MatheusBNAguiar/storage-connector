module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2018
    },
    "globals": {
        "__dirname": true,
        "process": true,
        "import": true
    },
    "rules": {
        "max-len": 0,
        "no-tabs": 0,
        "no-console": 0,
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};