import { GlobalRegistry } from '@/packages/core'
import icons from './icons'
import panels from './panels'
import global from './global'
import operations from './operations'

GlobalRegistry.registerDesignerLocales(icons, panels, global, operations)
