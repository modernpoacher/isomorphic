const debug = require('debug')

const log = debug('@modernpoacher/isomorphic')

const {
  env: {
    DEBUG = '@modernpoacher/isomorphic',
    NODE_ENV = 'development'
  }
} = process

debug.enable(DEBUG)

log('`@modernpoacher/isomorphic` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: 'current'
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  '@babel/proposal-class-properties',
  [
    'module-resolver', {
      alias: {
        '@modernpoacher/isomorphic': './src'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
