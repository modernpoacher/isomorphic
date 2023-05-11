const { expect } = require('chai')

const {
  renderToString,
  renderToStaticMarkup,
  render
} = require('@modernpoacher/isomorphic/react-router')

describe('`@modernpoacher/isomorphic/react-router`', () => {
  it('exports `renderToString`', () => expect(renderToString).to.be.a('function'))

  it('exports `renderToStaticMarkup`', () => expect(renderToStaticMarkup).to.be.a('function'))

  it('exports `render`', () => expect(render).to.be.a('function'))
})
