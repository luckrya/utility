# `isFunction`

判断输入是否是 `Function` 类型

## 类型

```ts
declare const isFunction: (value: unknown) => value is Function;
```

## 例子

```ts
import { isFunction } from "@luckrya/utility";

isFunction([]); // false
isFunction(function () {}); // true
isFunction(Function); // true
isFunction(Date); // true
```
