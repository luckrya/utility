# `isObjectNonNull`

判断输入是否是 `object` 类型且非 `null`

## 类型

```ts
declare const isObjectNonNull: (value: unknown) => value is object;
```

## 例子

```ts
import { isObjectNonNull } from "@luckrya/utility";

isObjectNonNull(null); // false
isObjectNonNull({}); // true
isObjectNonNull([]); // true
isObjectNonNull(new Date()); // true
```
