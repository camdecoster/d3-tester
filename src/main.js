import BootstrapVue from '@coreui/bootstrap-vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.vue';
import routes from './routes.js';

const router = createRouter({
	history: createWebHistory(process.env.NODE_ENV === 'production' ? '/d3-tester/' : '/'),
	routes
});


createApp(App)
	.use(BootstrapVue)
	.use(router)
	.mount('#app');
