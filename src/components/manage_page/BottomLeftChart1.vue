<template>
  <div id="bottom-left-chart-1">
    <div class="blc1-title">机电设备完好率</div>
    <div class="blc1-value"><span>99.01</span>%</div>
    <div class="blc1-chart">
      <dv-charts :option="option"></dv-charts>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomLeftChart1',
  components: {},
  data() {
    return {
      option: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '监控系统', value: 93, radius: ['30%', '33%'] },
              { name: '收费系统', value: 65, radius: ['32%', '35%'] },
              { name: '通信系统', value: 32, radius: ['31%', '37%'] },
              { name: '供配电系统', value: 44, radius: ['31%', '32%'] },
              { name: '其它', value: 52, radius: ['32%', '35%'] }
            ],
            outsideLabel: {
              labelLineEndLength: 20,
              formatter: '{percent}%\n{name}',
              style: {
                fill: '#fff'
              }
            }
          },
          {
            name: 'decoration ring',
            type: 'pie',
            data: [{ value: 10, radius: ['50%', '53%'] }],
            outsideLabel: {
              show: false
            },
            pieStyle: {
              fill: 'rgba(255, 255, 255, 0.2)'
            }
          },
          {
            name: 'decoration ring',
            type: 'pie',
            data: [{ value: 10, radius: ['45%', '46%'] }],
            outsideLabel: {
              show: false
            },
            pieStyle: {
              fill: 'rgba(255, 255, 255, 0.2)'
            }
          }
        ],
        color: ['#00c0ff', '#3de7c9', '#fff', '#00c0ff', '#3de7c9', '#fff']
      }
    }
  },
  methods: {}
}
</script>

<style lang="less">
#bottom-left-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .blc1-title,
  .blc1-value,
  .blc1-chart {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blc1-title {
    height: 150px;
    font-size: 20px;
  }

  .blc1-value {
    height: 40px;
    font-size: 30px;
    font-weight: bold;

    span {
      color: #00c0ff;
      font-size: 45px;
    }
  }

  .blc1-chart {
    height: calc(~'100% - 190px');
  }
}
</style>
