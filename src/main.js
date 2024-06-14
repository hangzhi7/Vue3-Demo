import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//插件
import setupPlugins from './plugins'

createApp(App)
    .use(setupPlugins)
    .mount('#app')