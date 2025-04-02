import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 添加此选项处理可能的空值问题
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    }), 
    vueJsx(), 
    (monacoEditorPlugin as any).default({
      languageWorkers: ['editorWorkerService', 'json']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }, 
    extensions: ['.js', '.ts', '.vue', '.tsx', '.json'],
  }
})
