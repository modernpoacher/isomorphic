import React from 'react'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import ReactDOMServer from 'react-dom/server'
import Boom from '@hapi/boom'

const ROUTER_MATCH = 'Renderer encountered an error raised by ReactRouter.match()'
const REACT_RENDER = 'Renderer caught an implementation error in ReactDOMServer.renderToString()'

const badImplementation = (message) => Boom.badImplementation(message)
const notFound = (location) => Boom.notFound(`ReactRouter.match() cannot find ${location}`)

/**
 * @return {String}
 */
const renderToString = (store, props) => (
  ReactDOMServer.renderToString(
    <Provider store={store}>
      <RouterContext
        {...props}
      />
    </Provider>
  )
)

export default (store, routes, location) => (
  new Promise((resolve, reject) => {
    match({ routes, location }, (e, redirect, props) => {
      let b
      if ((b = !!e) || (!redirect && !props)) {
        return reject(
          (b)
            ? badImplementation(ROUTER_MATCH)
            : notFound(location)
        )
      }
      if (redirect) return resolve({ redirect })

      const {
        getState
      } = store

      try {
        const rendered = renderToString(store, props)
        const state = getState()
        resolve({ rendered, state })
      } catch (e) {
        reject(badImplementation(REACT_RENDER))
        void e
      }
    })
  })
)
