import { createApp } from 'vue';
import 'reset-css';
import router from './router/index';
import { useI18n } from './plugins/i18n';
import App from './App.vue';

const app = createApp(App);
app.use(router).use(useI18n);
app.mount('#app');
