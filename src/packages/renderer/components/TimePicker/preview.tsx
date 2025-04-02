import { TimePicker as FormilyTimePicker } from '@/packages/components'
import { composeExport } from '@/packages/components/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

export const TimePicker: DnFC<VNode> =
  composeExport(FormilyTimePicker, {
    Behavior: createBehavior({
      name: 'TimePicker',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'TimePicker',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.TimePicker),
      },
      designerLocales: AllLocales.TimePicker,
    }),
    Resource: createResource({
      icon: 'TimePickerSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'string',
            title: 'TimePicker',
            'x-decorator': 'FormItem',
            'x-component': 'TimePicker',
          },
        },
      ],
    }),
  })
