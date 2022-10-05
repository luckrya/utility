# `isBoolean`

判断输入是否是 `boolean` 类型

## 类型

```ts
declare const isBoolean: (value: unknown) => value is boolean;
```

## 例子

```ts
import { isBoolean } from "@luckrya/utility";

isBoolean(); // => false
isBoolean(true); // => true
```
