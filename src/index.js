import React from 'react'
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
const renderToString = (props) => (
  ReactDOMServer.renderToString(
    <RouterContext
      {...props}
    />
  )
)

export default (routes, location) => (
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

      try {
        const rendered = renderToString(props)
        resolve({ rendered })
      } catch (e) {
        reject(badImplementation(REACT_RENDER))
        void e
      }
    })
  })
)
