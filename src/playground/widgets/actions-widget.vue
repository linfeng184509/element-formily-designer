<template>
  <div class="dn-actions-widget">
    <el-radio-group :modelValue="language" @change="handleChangeLanguage">
      <el-radio-button label="zh-cn">简体中文</el-radio-button>
      <el-radio-button label="en-us">English</el-radio-button>
    </el-radio-group>
    <el-button :style="{ marginLeft: '10px' }" @click="handleSaveSchema">保存</el-button>
    <el-button @click="handleSaveSchema">发布</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { loadInitialSchema, saveSchema } from '../service'
import { GlobalRegistry } from '@/packages/core'
import { useDesigner, useTree } from '@/packages/prototypes'

function useI18n() {
  const language = ref(
    String.prototype.toLocaleLowerCase.call(
      GlobalRegistry.getDesignerLanguage()
    )
  )
  function handleChangeLanguage(value: string) {
    language.value = value
    GlobalRegistry.setDesignerLanguage(value)
  }
  return { language, handleChangeLanguage }
}

export default defineComponent({
  setup() {
    const designerRef = useDesigner()
    // // TODO::tree node has reaction problems

    onMounted(() => {
      loadInitialSchema(designerRef.value)
      const supportLocales = ['zh-cn', 'en-us', 'ko-kr']
      if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
        GlobalRegistry.setDesignerLanguage('zh-cn')
      }
    })

    function handleSaveSchema() {
      saveSchema(designerRef.value)
    }

    return { ...useI18n(), handleSaveSchema }
  },
})
</script>

<style scoped lang="less">
.dn-actions-widget {
  display: flex;
  align-items: center;
}
</style>