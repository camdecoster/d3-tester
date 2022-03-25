import FormatTester from './components/FormatTester.vue';
import TimeFormatTester from './components/TimeFormatTester.vue';

export default [
	{
		path: '/',
		component: FormatTester
	},
	{
		path: '/d3-format',
		component: FormatTester
	},
	{
		path: '/d3-time-format',
		component: TimeFormatTester
	},
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	redirect: '/'
	// }
];