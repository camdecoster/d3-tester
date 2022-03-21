import { createApp } from 'vue';
import BootstrapVue from '@coreui/bootstrap-vue';

// Import styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';

import App from './App.vue';


createApp(App)
	.use(BootstrapVue)
	.mount('#app');
