<template>
  <div id="top-header">
    <div class="th-left">
      <dv-border-box-12>
        数据看板
      </dv-border-box-12>
    </div>
    <div class="th-middle">数据可视化面板</div>
    <div class="th-right">
      <dv-border-box-12>
        即时状态
      </dv-border-box-12>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#top-header {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url('../../assets/images/top.png');
  background-size: 100% 100%;

  .th-middle {
    font-size: 32px;
    letter-spacing: 10px;
  }

  .dv-border-box-12 {
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>
