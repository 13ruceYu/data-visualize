<template>
  <div id="left-chart-1">
    <div class="lc1-header">张三收费站</div>
    <div class="lc1-details">设备运行总数 <span>430</span></div>
    <dv-capsule-chart class="lc1-chart" :config="config"></dv-capsule-chart>
    <dv-decoration-2 style="height: 10px"></dv-decoration-2>
  </div>
</template>

<script>
export default {
  name: 'LeftChart1',
  data() {
    return {
      config: {
        data: [
          {
            name: '收费系统',
            value: 167
          },
          {
            name: '通信系统',
            value: 67
          },
          {
            name: '监控系统',
            value: 123
          },
          {
            name: '供配电系统',
            value: 55
          },
          {
            name: '其他',
            value: 98
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: '件'
      }
    }
  },
  methods: {}
}
</script>

<style lang="less">
#left-chart-1 {
  width: 100%;
  height: 37%;
  display: flex;
  flex-direction: column;

  .lc1-header {
    height: 40px;
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .lc1-details {
    height: 50px;
    font-size: 16px;
    text-align: center;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }

  .lc1-chart {
    flex: 1;
  }
}
</style>
