const debug = require('debug')

const log = debug('@modernpoacher/isomorphic')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`@modernpoacher/isomorphic` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env',
    {
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
  '@babel/syntax-jsx'
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [/node_modules\/(?!@sequencemedia)/]
  }
}
