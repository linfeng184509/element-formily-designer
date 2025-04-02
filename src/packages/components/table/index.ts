import { transformComponent } from '../__builtins__'
import { connect, mapProps } from '@formily/vue'
import { ElTableV2 } from 'element-plus'

export type ElTableV2Props = typeof ElTableV2

const TransformElTableV2 = transformComponent<ElTableV2Props>(ElTableV2, {
})

export const Table = connect(
    TransformElTableV2,
    mapProps({
      
    })
)

export default Table