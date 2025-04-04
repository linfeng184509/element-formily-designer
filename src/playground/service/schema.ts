import { Engine } from '@/packages/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@/packages/transformer'
import { ElMessage } from 'element-plus'

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  )
  ElMessage.success('Save Success')
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    const tree = transformToTreeNode(
      JSON.parse(localStorage.getItem('formily-schema'))
    )
    designer.setCurrentTree(tree)
  } catch (err) { }
}
