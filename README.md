# @modernpoacher/isomorphic

Implements:

1. [@sequencemedia/react-render](https://github.com/sequencemedia/react-render)
2. [@sequencemedia/react-router-render](https://github.com/sequencemedia/react-router-render)
3. [@sequencemedia/react-redux-render](https://github.com/sequencemedia/react-redux-render)
4. [@sequencemedia/react-router-redux-render](https://github.com/sequencemedia/react-render)

## 1. *React*

```javascript
import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@modernpoacher/isomorphic/lib'
```

## 2. *React Router*

```javascript
import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@modernpoacher/isomorphic/lib/react-router'
```

## 3. *React* + *Redux*

```javascript
import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@modernpoacher/isomorphic/lib/redux'
```

## 4. *React Router* + *Redux*

```javascript
import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@modernpoacher/isomorphic/lib/react-router/redux'
```

## Implementation

Each function returns a string (or resolves to a string in the case of `render` which returns a `Promise`).
