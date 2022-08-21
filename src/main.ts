import { createApp } from 'vue';
import 'reset-css';
import { setupStore } from '@/store';
import router from './router/index';
import { useI18n } from './plugins/i18n';
import App from './App.vue';

const app = createApp(App);
app.use(router).use(useI18n).use(setupStore);
app.mount('#app');
