import { expect } from 'chai'

import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@modernpoacher/isomorphic/react-router/redux'

describe('`@modernpoacher/isomorphic/react-router/redux`', () => {
  it('exports `renderToString`', () => expect(renderToString).to.be.a('function'))

  it('exports `renderToStaticMarkup`', () => expect(renderToStaticMarkup).to.be.a('function'))

  it('exports `render`', () => expect(render).to.be.a('function'))
})
