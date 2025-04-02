import { GlobalRegistry, IDesignerRegistry } from '@/packages/core'

export const useRegistry = (): IDesignerRegistry => {
  return window['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
