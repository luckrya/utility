# `isUndefined`

判断输入是否是 `undefined` 类型

## 类型

```ts
declare const isUndefined: (value: unknown) => value is undefined;
```

## 例子

```ts
import { isUndefined } from "@luckrya/utility";

isUndefined(); // => true
isUndefined(void 0); // => true
isUndefined(undefined); // => true

isUndefined(null); // => false
```
