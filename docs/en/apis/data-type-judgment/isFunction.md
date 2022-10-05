# `isFunction`

Check if input is of type Function

## Interface

```ts
declare const isFunction: (value: unknown) => value is Function;
```

## Example

```ts
import { isFunction } from "@luckrya/utility";

isFunction([]); // false
isFunction(function () {}); // true
isFunction(Function); // true
isFunction(Date); // true
```
