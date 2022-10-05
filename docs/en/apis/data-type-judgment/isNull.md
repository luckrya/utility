# `isNull`

Check if input is of null

## Interface

```ts
declare const isNull: (value: unknown) => value is null;
```

## Example

```ts
import { isNull } from "@luckrya/utility";

isNull(); // => false
isNull(null); // => true
```
