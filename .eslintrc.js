module.exports = {
	env: {
		node: true
	},
	extends: [
		// add more generic rulesets here, such as:
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		// 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
	],
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		indent: [
			'error',
			'tab',
			{ SwitchCase: 1 }
		],
		quotes: [
			'error',
			'single',
			{ avoidEscape: true }
		],
		semi: [
			'error',
			'always'
		],
		'vue/html-indent': [
			'error',
			'tab',
			{ baseIndent: 0 }
		]
	}
};