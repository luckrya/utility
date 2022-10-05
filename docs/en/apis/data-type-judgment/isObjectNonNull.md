# `isObjectNonNull`

Check if input is of type object and not null

## Interface

```ts
declare const isObjectNonNull: (value: unknown) => value is object;
```

## Example

```ts
import { isObjectNonNull } from "@luckrya/utility";

isObjectNonNull(null); // false
isObjectNonNull({}); // true
isObjectNonNull([]); // true
isObjectNonNull(new Date()); // true
```
