module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "rules": {
        "import/no-extraneous-dependencies": ["off", {"devDependencies": true}],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/react-in-jsx-scope": "off",
        "class-methods-use-this": "warn",
        "no-unused-prop-types": [0, { skipShapeProps: true }],
    }
};
