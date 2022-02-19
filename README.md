# sw-vue-ui

## 安装
```sh
yarn add sw-vue-ui
// or
npm install sw-vue-ui
```

## 使用
```js
// main.js

// 完整引入
import swui from 'sw-vue-ui'
import 'sw-vue-ui/lib/sw-vue-ui.css'
Vue.use(swui)

// 按需引入
import { SwLoading } from 'sw-vue-ui'
Vue.use(SwLoading)

```

```vue
// App.vue
<template>
  <sw-loading ref="loading" background-color="rgba(0, 0, 0, 0.7)"></sw-loading>
</template>

<script>
export default {
  mounted () {
    this.$refs.loading.show()

    setTimeout(() => {
      this.$refs.loading.hide()
    }, 2000)
  }
}
</script>

```