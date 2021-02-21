<!--
 * @Author: bruce yu
 * @Date: 2021-02-21 10:31:53
 * @LastEditTime: 2021-02-21 10:35:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/views/StockPage.vue
-->
<template>
  <div class="comp-page">
    <Stock></Stock>
  </div>
</template>

<script>
import Stock from '@/components/Stock'
export default {
  name: 'StockPage',
  components: { Stock },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
