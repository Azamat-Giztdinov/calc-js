// eslint.config.js
module.exports = [
    {
      ignores: ['node_modules/**']
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-unused-vars': ['warn'],
      }
    }
  ];
  