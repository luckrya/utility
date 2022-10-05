# `isNaN`

Check if input is of NaN

## Interface

```ts
declare const isNaN: (number: unknown) => boolean;
```

## Example

```ts
import { isNaN } from "@luckrya/utility";

isNaN(); // => false
isNaN(0); // => false
isNaN(NaN); // => true
```
