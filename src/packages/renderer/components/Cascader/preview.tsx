import { Cascader as FormilyCascader } from '@/packages/components'
import { composeExport } from '@/packages/components/__builtins__'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

export const Cascader: DnFC<VNode> =
  composeExport(FormilyCascader, {
    Behavior: createBehavior({
      name: 'Cascader',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Cascader',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Cascader),
      },
      designerLocales: AllLocales.Cascader,
    }),
    Resource: createResource({
      icon: 'CascaderSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            title: 'Cascader',
            'x-decorator': 'FormItem',
            'x-component': 'Cascader',
          },
        },
      ],
    }),
  })
