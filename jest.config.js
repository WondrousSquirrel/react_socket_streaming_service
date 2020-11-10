module.exports = {
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
        '^.+\\.module\\.{css,sass,scss}$',
    ],
    moduleNameMapper: {
        '^.+\\.(css|scss)$': '<rootDir>/app/tests/config/CSSStub.js'
    },
};
