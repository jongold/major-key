import { assoc, compose, curry, keys, last, reduce, replace, toUpper } from 'ramda'

const lastToUpper = compose(toUpper, last)

// snakeToCamelCase :: String -> String
const snakeToCamelCase = replace(/_\w/g, lastToUpper)

// kebabToCamelCase :: String -> String
const kebabToCamelCase = replace(/-\w/g, lastToUpper)

// transformKeys :: (k -> k) -> { k: v } -> { k: v }
export const transformKeys = curry((fn, obj) =>
  reduce((acc, key) =>
    assoc(fn(key), obj[key], acc)
  , {}, keys(obj))
)

// kebabToCamelCaseKeys :: { k: v } -> { k: v }
export const kebabToCamelCaseKeys = transformKeys(kebabToCamelCase)

// snakeToCamelCaseKeys :: { k: v } -> { k: v }
export const snakeToCamelCaseKeys = transformKeys(snakeToCamelCase)
