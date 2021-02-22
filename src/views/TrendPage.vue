<!--
 * @Author: bruce yu
 * @Date: 2021-02-19 16:02:21
 * @LastEditTime: 2021-02-19 16:08:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/views/TrendPage.vue
-->
<template>
  <div class="comp-page">
    <Trend></Trend>
  </div>
</template>

<script>
import Trend from '@/components/screen_page/Trend'
export default {
  name: 'TrendPage',
  components: { Trend },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
