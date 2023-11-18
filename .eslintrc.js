module.exports = {
    extends: [
        'eslint:strict', 
        'plugin:@typescript-eslint/strict-type-checked'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    overrides: [
        {
            files: ['*.js'],
            extends: ['plugin:@typescript-eslint/disable-type-checked'],
        },
    ],
    ignorePatterns: [
        "**/*.js"
    ]
};