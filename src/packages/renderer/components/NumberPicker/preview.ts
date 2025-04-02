import { InputNumber as FormilyInputNumber } from '@/packages/components'
import { composeExport } from '@/packages/components/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

const NumberPicker: DnFC<VNode> =
  composeExport(FormilyInputNumber, {
    Behavior: createBehavior({
      name: 'InputNumber',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'InputNumber',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.InputNumber),
      },
      designerLocales: AllLocales.InputNumber,
    }),
    Resource: createResource({
      icon: 'NumberPickerSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'number',
            title: 'InputNumber',
            'x-decorator': 'FormItem',
            'x-component': 'InputNumber',
            'x-component-props': {
              'controls-position': 'right',
            },
          },
        },
      ],
    }),
  })

export const InputNumber = NumberPicker
