# `isBoolean`

Check if input is of type boolean

## Interface

```ts
declare const isBoolean: (value: unknown) => value is boolean;
```

## Example

```ts
import { isBoolean } from "@luckrya/utility";

isBoolean(); // => false
isBoolean(true); // => true
```
