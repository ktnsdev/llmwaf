module.exports = {
    transform: {
        "^.+\\.svelte$": [
            "svelte-jester",
            {
                preprocess: true,
            },
        ],
        "^.+\\.ts$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
    },
    moduleFileExtensions: ["js", "ts", "svelte"],
    extensionsToTreatAsEsm: [".svelte", ".ts"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./jest.setup.ts"],
};
