import { createBehavior, createResource } from '@/packages/core'
import { composeExport } from '@/packages/components/__builtins__'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { Container } from '../../common/Container'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

export const ObjectContainer: DnFC<VNode> =
  composeExport(Container, {
    Behavior: createBehavior({
      name: 'Object',
      extends: ['Field'],
      selector: (node) => node.props?.type === 'object',
      designerProps: {
        droppable: true,
        propsSchema: createFieldSchema(),
      },
      designerLocales: AllLocales.ObjectLocale,
    }),
    Resource: createResource({
      icon: 'ObjectSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'object',
          },
        },
      ],
    }),
  })
