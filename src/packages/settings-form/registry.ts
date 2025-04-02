import loader from '@monaco-editor/loader'

const Registry = {
  cdn: '/public/js',
}

export const setNpmCDNRegistry = (registry: string) => {
  Registry.cdn = registry
  loader.config({
    paths: {
      vs: registry,
    },
  })
}

export const getNpmCDNRegistry = () => String(Registry.cdn).replace(/\/$/, '')
