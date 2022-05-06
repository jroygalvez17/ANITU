import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import LineChart from './components/LineChart.vue';

createApp(App).component('LineChart', LineChart).use(router).mount('#app')
