# `isError`

Check if input is of type Error

## Interface

```ts
declare const isError: (value: unknown) => value is Error;
```

## Example

```ts
import { isError } from "@luckrya/utility";

isError(); // => false
isError(Error); // => false
isError(new Error("MSG")); // => true
```
