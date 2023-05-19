# @modernpoacher/isomorphic

Implements:

1. [@sequencemedia/react-render](https://github.com/sequencemedia/react-render)
2. [@sequencemedia/react-router-render](https://github.com/sequencemedia/react-router-render)
3. [@sequencemedia/react-redux-render](https://github.com/sequencemedia/react-redux-render)
4. [@sequencemedia/react-router-redux-render](https://github.com/sequencemedia/react-router-redux-render)

## 1. _React_

```javascript
import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@modernpoacher/isomorphic'
```

## 2. _React Router_

```javascript
import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@modernpoacher/isomorphic/react-router'
```

## 3. _React_ and _Redux_

```javascript
import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@modernpoacher/isomorphic/redux'
```

## 4. _React Router_ and _Redux_

```javascript
import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@modernpoacher/isomorphic/react-router/redux'
```

## Implementation

Each function returns a string (or resolves to a string in the case of `render` which returns a `Promise`)
