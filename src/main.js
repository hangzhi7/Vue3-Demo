import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//插件
import setupPlugins from './plugins'

// 本地SVG图标 注册脚本
import 'virtual:svg-icons-register';

createApp(App)
    .use(setupPlugins)
    .mount('#app')
