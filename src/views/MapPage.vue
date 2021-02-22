<!--
 * @Author: bruce yu
 * @Date: 2021-02-20 11:41:04
 * @LastEditTime: 2021-02-20 11:44:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/views/MapPage.vue
-->
<template>
  <div class="comp-page">
    <single-map></single-map>
  </div>
</template>

<script>
import Map from '@/components/screen_page/Map'
export default {
  name: 'MapPage',
  components: { 'single-map': Map },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
