module.exports = {
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
        '^.+\\.module\\.{css,sass,scss}$',
    ],
    moduleNameMapper: {
        '^react-native$': 'react-native-web',
        '^.+\\.module\\.{css,sass,scss}$': 'identity-obj-proxy',
    },
};
