# `isDate`

Check if input is of type Date

## Interface

```ts
declare const isDate: (value: unknown) => value is Date;
```

## Example

```ts
import { isDate } from "@luckrya/utility";

isDate(Date()); // false
isDate("2022-10-01"); // false
isDate(new Date()); // true
```
