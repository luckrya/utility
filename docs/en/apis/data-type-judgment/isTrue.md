# `isTrue`

Check if input is of true

## Interface

```ts
declare const isTrue: (value: unknown) => value is true;
```

## Example

```ts
import { isTrue } from "@luckrya/utility";

isTrue(); // => false
isTrue(false); // => false
isTrue(true); // => true
```
