const { expect } = require('chai')

const {
  renderToString,
  renderToStaticMarkup,
  render
} = require('@modernpoacher/isomorphic')

describe('`@modernpoacher/isomorphic`', () => {
  it('exports `renderToString`', () => expect(renderToString).to.be.a('function'))

  it('exports `renderToStaticMarkup`', () => expect(renderToStaticMarkup).to.be.a('function'))

  it('exports `render`', () => expect(render).to.be.a('function'))
})
