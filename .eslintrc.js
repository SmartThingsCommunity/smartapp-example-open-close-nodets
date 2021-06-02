module.exports = {
	ignorePatterns: ['.eslintrc.js'],
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 6,
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	plugins: [
		'@typescript-eslint',
	],
	env: {
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'indent': ['error', 'tab'],
		// disable the base semi rule as it can report incorrect errors when using ts version
		'semi': 'off',
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/no-floating-promises': 'error'
	}
}
