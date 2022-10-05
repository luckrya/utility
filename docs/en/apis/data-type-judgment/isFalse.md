# `isFalse`

Check if input is of false

## Interface

```ts
declare const isFalse: (value: unknown) => value is false;
```

## Example

```ts
import { isFalse } from "@luckrya/utility";

isFalse(); // => false
isFalse(true); // => false
isFalse(false); // => true
```
