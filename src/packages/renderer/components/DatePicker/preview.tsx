import { DatePicker as FormilyDatePicker } from '@/packages/components'
import { composeExport } from '@/packages/components/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

export const DatePicker: DnFC<VNode> =
  composeExport(FormilyDatePicker, {
    Behavior: createBehavior({
      name: 'DatePicker',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'DatePicker',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.DatePicker),
      },
      designerLocales: AllLocales.DatePicker,
    }),
    Resource: createResource({
      icon: 'DatePickerSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'string',
            title: 'DatePicker',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker',
          },
        },
      ],
    }),
  })
