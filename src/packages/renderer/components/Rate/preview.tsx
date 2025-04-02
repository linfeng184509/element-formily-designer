import { ElRate } from 'element-plus'
import { composeExport, transformComponent } from '@/packages/components/__builtins__'
import { connect, mapProps, VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

const RateInner = connect(transformComponent(ElRate, {
  change: 'onUpdate:modelValue'
}), mapProps({ value: 'modelValue' }))

export const Rate: DnFC<VNode> = composeExport(RateInner, {
  Behavior: createBehavior({
    name: 'Rate',
    extends: ['Field'],
    selector: (node) => node.props?.['x-component'] === 'Rate',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Rate),
    },
    designerLocales: AllLocales.Rate,
  }),
  Resource: createResource({
    icon: 'RateSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'number',
          title: 'Rate',
          'x-decorator': 'FormItem',
          'x-component': 'Rate',
        },
      },
    ],
  }),
})
