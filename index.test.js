it('transforms with an arbitrary function', () => {
  const { transformKeys } = require('./index')
  const obj = {
    foo: 'bar',
    'foo-bar': 'baz',
    'baz-qux': {
      'baz-qux': {
        'baz-qux': 'baz'
      }
    }
  }

  const fn = k => k.toUpperCase()

  const expected = {
    FOO: 'bar',
    'FOO-BAR': 'baz',
    'BAZ-QUX': {
      'BAZ-QUX': {
        'BAZ-QUX': 'baz'
      }
    }
  }

  expect(transformKeys(fn, obj)).toEqual(expected)
})

it('turns kebab-case-keys to camelCase', () => {
  const { kebabToCamelCaseKeys } = require('./index')
  const obj = {
    'foo-bar': 'bar',
    'baz-qux': {
      'baz-qux': {
        'baz-qux': 'baz'
      }
    }
  }

  const expected = {
    fooBar: 'bar',
    'bazQux': {
      'bazQux': {
        'bazQux': 'baz'
      }
    }
  }

  expect(kebabToCamelCaseKeys(obj)).toEqual(expected)
})

it('turns snake_case_keys to camelCase', () => {
  const { snakeToCamelCaseKeys } = require('./index')
  const obj = {
    'foo_bar': 'bar',
    'baz_qux': {
      'baz_qux': {
        'baz_qux': 'baz'
      }
    }
  }

  const expected = {
    fooBar: 'bar',
    'bazQux': {
      'bazQux': {
        'bazQux': 'baz'
      }
    }
  }

  expect(snakeToCamelCaseKeys(obj)).toEqual(expected)
})
