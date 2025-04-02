import { Checkbox as FormilyCheckbox } from '@/packages/components'
import { composeExport } from '@/packages/components/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

export const Checkbox: DnFC<VNode> =
  composeExport(FormilyCheckbox, {
    Behavior: createBehavior({
      name: 'Checkbox.Group',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Checkbox.Group',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Checkbox.Group),
      },
      designerLocales: AllLocales.CheckboxGroup,
    }),
    Resource: createResource({
      icon: 'CheckboxGroupSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'array' || 'Array<string | number>',
            title: 'Checkbox Group',
            'x-decorator': 'FormItem',
            'x-component': 'Checkbox.Group',
            enum: [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
            ],
          },
        },
      ],
    }),
  })
