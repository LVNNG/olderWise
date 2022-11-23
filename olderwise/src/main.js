import { createApp } from 'vue'

import router from './router.js';
import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App)

app.use(router);

app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');