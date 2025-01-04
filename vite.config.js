import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {fileURLToPath, URL} from "url";
import {resolve} from "path";

const pathSrc = resolve(__dirname, "src");

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite";

import {ElementPlusResolver} from "unplugin-vue-components/resolvers";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue", "vue-router"],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({}),
      ],
      // 指定自动导入函数TS类型声明文件路径
      // 也可以不生成声明文件 dts: false
      dts: resolve(pathSrc, "types", "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
          enabledCollections: ["ep"]
        }),
      ],
      // 指定自动导入组件TS类型声明文件路径
      // 也可以不生成声明文件 dts: false
      dts: resolve(pathSrc, "types", "components.d.ts"),
    }),
    Icons({
      // 自动安装图标库
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(pathSrc, "assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    })

  ],
  resolve: {
    alias: {
      // '@': resolve(__dirname, 'src')
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      // less: {
      //   javascriptEnabled: true,
      //   additionalData: `@import "@/assets/style/variables.less";`,
      // },
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "@/assets/style/variables.scss";`,
      },
    },
  },
})
