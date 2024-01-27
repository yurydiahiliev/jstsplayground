module.exports = {
    testMatch: ['**/*.spec.ts'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    testTimeout: 30000, // Optionally increase test timeout
    preset: 'ts-jest',
    testEnvironment: 'node'
}