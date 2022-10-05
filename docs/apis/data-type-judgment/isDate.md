# `isDate`

判断输入是否是 `Date` 类型

## 类型

```ts
declare const isDate: (value: unknown) => value is Date;
```

## 例子

```ts
import { isDate } from "@luckrya/utility";

isDate(Date()); // false
isDate("2022-10-01"); // false
isDate(new Date()); // true
```
