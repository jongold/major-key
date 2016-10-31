import { assoc, compose, curry, is, keys, last, reduce, replace, toUpper } from 'ramda'

// isObject :: * -> Boolean
const isObject = is(Object)

// lastToUpper :: [String] -> String
const lastToUpper = compose(toUpper, last)

// snakeToCamelCase :: String -> String
const snakeToCamelCase = replace(/_\w/g, lastToUpper)

// kebabToCamelCase :: String -> String
const kebabToCamelCase = replace(/-\w/g, lastToUpper)

// transformKeys :: (k -> k) -> { k: v } -> { k: v }
export const transformKeys = curry((fn, obj) =>
  reduce((acc, key) => {
    if (isObject(obj[key])) {
      return assoc(fn(key), transformKeys(fn, obj[key]), acc)
    }
    return assoc(fn(key), obj[key], acc)
  }, {}, keys(obj))
)

// kebabToCamelCaseKeys :: { k: v } -> { k: v }
export const kebabToCamelCaseKeys = transformKeys(kebabToCamelCase)

// snakeToCamelCaseKeys :: { k: v } -> { k: v }
export const snakeToCamelCaseKeys = transformKeys(snakeToCamelCase)
