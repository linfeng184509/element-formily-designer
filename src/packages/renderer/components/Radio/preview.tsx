import { Radio as FormilyRadio } from '@/packages/components'
import { composeExport } from '@/packages/components/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

export const Radio: DnFC<VNode> = composeExport(
  FormilyRadio,
  {
    Behavior: createBehavior({
      name: 'Radio.Group',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Radio.Group',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Checkbox.Group),
      },
      designerLocales: AllLocales.CheckboxGroup,
    }),
    Resource: createResource({
      icon: 'RadioGroupSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'string | number',
            title: 'Radio Group',
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            enum: [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
            ],
          },
        },
      ],
    }),
  }
)
