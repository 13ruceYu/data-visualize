<!--
 * @Author: bruce yu
 * @Date: 2021-02-09 17:27:28
 * @LastEditTime: 2021-02-18 21:55:02
 * @LastEditors: Please set LastEditors
 * @Description: 路由 /sellpage 下显示，通过子组件 Seller.vue 注册
 * @FilePath: /data-visualize/src/views/SellerPage.vue
-->
<template>
  <div class="comp-page">
    <Seller></Seller>
  </div>
</template>

<script>
import Seller from '@/components/screen_page/Seller'
export default {
  name: '',
  components: {
    Seller
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
