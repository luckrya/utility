# `isUndefined`

Check if input is of type undefined

## Interface

```ts
declare const isUndefined: (value: unknown) => value is undefined;
```

## Example

```ts
import { isUndefined } from "@luckrya/utility";

isUndefined(); // => true
isUndefined(void 0); // => true
isUndefined(undefined); // => true

isUndefined(null); // => false
```
