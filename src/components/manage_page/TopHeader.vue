<template>
  <div id="top-header">
    <div class="mh-left">
      <dv-border-box-2>
        技术支持
      </dv-border-box-2>
    </div>
    <div class="mh-middle">数据可视化平台</div>
    <div class="mh-right">
      <dv-border-box-2>
        即时数据
      </dv-border-box-2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#top-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .dv-border-box-2 {
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .mh-left {
    font-size: 20px;
  }

  .mh-middle {
    font-size: 30px;
    letter-spacing: 5px;
  }
}
</style>
