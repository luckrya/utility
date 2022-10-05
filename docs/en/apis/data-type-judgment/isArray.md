# `isArray`

Check if input is of type array

## Interface

```ts
declare const isArray: (arg: any) => arg is any[];
```

## Example

```ts
import { isArray } from "@luckrya/utility";

isArray(); // => false
isArray(false); // => false
isArray({}); // => false
isArray([]); // => true
```
