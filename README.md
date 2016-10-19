# major-key 🔑

tools for smooshing around the keys of objects

useful for APIs with different standards to your styleguide n stuff

```
transformKeys :: (k -> k) -> { k: v } -> { k: v }
kebabToCamelCaseKeys :: { k: v } -> { k: v }
snakeToCamelCaseKeys :: { k: v } -> { k: v }
```
