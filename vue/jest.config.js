module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.vue$": "@vue/vue3-jest",
    },
    verbose: true,
};
