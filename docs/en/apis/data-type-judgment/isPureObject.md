# `isPureObject`

Check if input is of type `pure object`

## Interface

```ts
declare const isPureObject: <R extends Record<string, any>>(
  value: unknown
) => value is R;
```

## Example

```ts
import { isPureObject } from "@luckrya/utility";

isPureObject(); // false
isPureObject(null); // false
isPureObject(Number(1)); // false
isPureObject([]); // false

isPureObject({}); // true
```
