import { loader } from '@guolao/vue-monaco-editor'
import * as monaco from "monaco-editor"
import chromeTheme from './themes/chrome'
import monokaiTheme from './themes/monokai'
import { format } from './format'
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker()
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker()
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker()
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

let initialized = false

export const initMonaco = () => {
    if (initialized) return
    loader.config({ monaco })
    loader.init().then(monaco => {
        monaco.editor.defineTheme('monokai', monokaiTheme as any)
        monaco.editor.defineTheme('chrome-devtools', chromeTheme as any)
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.Latest,
            allowNonTsExtensions: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            esModuleInterop: true,
            jsx: monaco.languages.typescript.JsxEmit.React,
            reactNamespace: 'React',
            allowJs: true
        })

        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: true
        })
        monaco.languages.registerDocumentFormattingEditProvider('typescript', {
            async provideDocumentFormattingEdits(model) {
                return [
                    {
                        text: await format(model['getDesignerLanguage']?.() || 'typescript', model.getValue()),
                        range: model.getFullModelRange()
                    }
                ]
            }
        })
        initialized = true
    })
}
