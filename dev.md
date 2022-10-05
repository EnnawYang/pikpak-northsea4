## ~~引用icon不生效~~
```ts
import { ZoomQuestion, Download, Video } from '@vicons/tabler'
```
先随便再引用一个其他icon
```ts
import { ZoomQuestion, Download, Video, Wifi } from '@vicons/tabler'
```

实际估计是Vite的问题，某些修改不会触发更新。这时候在template里随便增删一下HTML元素，一般可以触发更新。（这个是基于个人观察，没细究）

## branch v2
原作者做的，主要是API抽离，挺好的一个处理