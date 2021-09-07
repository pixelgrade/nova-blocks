module.exports = {
	root: true,
	plugins: [
	  'import',
    'react-hooks',
	],
	globals: {
		wp: 'off',
	},
	rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
	},
  parserOptions: {
    "ecmaVersion": 2017
  },
  env: {
    "es6": true
  }
};
