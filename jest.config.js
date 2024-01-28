module.exports = {
    testMatch: ['**/api/*.spec.ts'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    testTimeout: 30000, // Optionally increase test timeout
    preset: 'ts-jest',
    preset: 'jest-playwright-preset',
    testEnvironment: 'node',
    injectGlobals: true
}