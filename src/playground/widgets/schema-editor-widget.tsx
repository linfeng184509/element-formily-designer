import { defineComponent, computed } from 'vue-demi'
import {
  transformToSchema,
  transformToTreeNode,
} from '@/packages/transformer'
import _ from 'lodash'
import { MonacoInput } from '@/packages/settings-form'

export default defineComponent({
  name: 'SchemaEditorWidget',
  props: ['tree'],
  emits: ['change'],
  setup(props, { attrs, emit }) {
    const code = computed(() => {
      return JSON.stringify(transformToSchema(props.tree), null, 2)
    })

    return () => {
      return (
        <MonacoInput
          {...attrs}
          value={code.value}
          onChange={(value) => emit('change', transformToTreeNode(JSON.parse(value)))}
          language="json"
          height="100%"
          width="100%"
        />
      )
    }
  },
})
