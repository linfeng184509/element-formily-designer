import { Select as FormilySelect } from '@/packages/components'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { composeExport } from '@/packages/components/__builtins__'
import { VNode } from 'vue'

export const Select: DnFC<VNode> =
  composeExport(FormilySelect, {
    Behavior: createBehavior({
      name: 'Select',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Select',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Select),
      },
      designerLocales: AllLocales.Select,
    }),
    Resource: createResource({
      icon: 'SelectSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            title: 'Select',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
          },
        },
      ],
    }),
  })
