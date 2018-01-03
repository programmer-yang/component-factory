---
  title: 'Todos'
---


#### 这是一个简单的备忘录

可以记录日常的一些事情


### 事例

#### 基础

> 我们默认`jsx`类型的代码为demo类型

```jsx
import Todos from './index';
ReactDOM.render(<Todos defaultValue="abc" />, mountNode);
```

输入内容然后enter

---

### API


| name | 描述 | 类型 | 默认值|
| --- | --- | --- | --- |
| defaultValue | 默认值 | string | - |
| onChange | 回调 | (value: String) => null | - |

> 内容仅供参考