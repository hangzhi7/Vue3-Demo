import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {fileURLToPath, URL} from "url";
import {resolve} from "path";

const pathSrc = resolve(__dirname, "src");

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue", "vue-router"],
      // 指定自动导入函数TS类型声明文件路径
      // 也可以不生成声明文件 dts: false
      dts: resolve(pathSrc,"types","auto-imports.d.ts"),
    }),
    Components({
      // 指定自动导入组件TS类型声明文件路径
      // 也可以不生成声明文件 dts: false
      dts: resolve(pathSrc,"types","components.d.ts"),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})