import { Input as FormilyPassword } from '@/packages/components'
import { composeExport } from '@/packages/components/__builtins__'
import { VueComponent, connect, mapProps } from '@formily/vue'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { merge } from '@formily/shared'
import { VNode } from 'vue'

export const Password: DnFC<VNode> =
  composeExport(connect(FormilyPassword, mapProps({}, (args) => ({ ...args, password: true }))), {
    Behavior: createBehavior({
      name: 'Password',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Password',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Input),
      },
      designerLocales: merge(AllLocales.Input, {
        'zh-CN': {
          title: '密码输入',
        },
        'en-US': {
          title: 'PassWord',
        },
      }),
    }),
    Resource: createResource({
      icon: 'PasswordSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            title: 'Password',
            'x-decorator': 'FormItem',
            'x-component': 'Password',
          },
        },
      ],
    }),
  })
