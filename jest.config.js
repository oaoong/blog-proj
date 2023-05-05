const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^@pages/(.*)$': '<rootDir>/pages/$1',
        '^@public/(.*)$': '<rootDir>/public/$1',
        '^@assets/(.*)$': '<rootDir>/assets/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    testMatch: [
        '**/__tests__/**/*.js?(x)',
        '**/?(*.)+(spec|test).js?(x)',
        '**/?(*.)+(spec|test).ts?(x)',
        '**/?(*.)+(spec|test).tsx?(x)',
    ],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
