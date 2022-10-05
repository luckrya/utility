# `isNumber`

Check if input is of type number

## Interface

```ts
export declare const isNumber: (value: unknown) => value is number;
```

## Example

```ts
import { isNumber } from "@luckrya/utility";

isNumber(); // => false
isNumber(false); // => false
isNumber(100); // => true
isNumber(NaN); // => true
```
