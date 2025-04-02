import { Table as FormilyTable } from '@/packages/components'
import { composeExport } from '@/packages/components/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@/packages/core'
import { DnFC } from '@/packages/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

export const Table: DnFC<VNode> = composeExport(
    FormilyTable,
    {
        Behavior: createBehavior({
            name: 'Table',
            selector: (node) => node.props?.['x-component'] === 'Table',
            designerProps: {
                propsSchema: createFieldSchema(AllSchemas.Table),
            },
            designerLocales: AllLocales.Table,
        }),
        Resource: createResource({
            icon: 'TableSource',
            elements: [
                {
                    componentName: 'Table',
                    props: {
                        type: 'array',
                        'x-component': 'Table',
                    },
                },
            ],
        }),
    }
)
