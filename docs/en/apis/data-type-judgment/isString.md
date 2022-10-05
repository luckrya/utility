# `isString`

Check if input is of type string

## Interface

```ts
declare const isString: (value: unknown) => value is string;
```

## Example

```ts
import { isString } from "@luckrya/utility";

isString(); // => false
isString("true"); // => true
```
