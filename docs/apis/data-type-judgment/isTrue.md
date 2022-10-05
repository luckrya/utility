# `isTrue`

判断输入是否是 `true`

## 类型

```ts
declare const isTrue: (value: unknown) => value is true;
```

## 例子

```ts
import { isTrue } from "@luckrya/utility";

isTrue(); // => false
isTrue(false); // => false
isTrue(true); // => true
```
