# `isPureObject`

判断输入是否是 `pure object` 类型

## 类型

```ts
declare const isPureObject: <R extends Record<string, any>>(
  value: unknown
) => value is R;
```

## 例子

```ts
import { isPureObject } from "@luckrya/utility";

isPureObject(); // false
isPureObject(null); // false
isPureObject(Number(1)); // false
isPureObject([]); // false

isPureObject({}); // true
```
