const path = require('path')

module.exports = {
    'env': {
        'es6': true,
        'browser': true,
        'jest': true
    },
    'parser': 'babel-eslint',
    'extends': 'airbnb',
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 4],
        'no-console': 'off',
        'semi': ['error', 'never'],
        'max-len': 'off',
        'react/jsx-indent': ['error', 4],
        'react/prop-types': 'off',
        'linebreak-style': 0,
        'react/jsx-indent-props': 'off',
        'no-return-assign': 'off',
        'jsx-a11y/anchor-is-valid': [ 'error', {
            'components': [ 'Link' ],
            'specialLink': [ 'to' ]
        }],
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                paths: [path.resolve(__dirname, 'src')]
            }
        }
    }
}
