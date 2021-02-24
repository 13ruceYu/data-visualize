<template>
  <div id="bottom-left-chart-1">
    <div class="blc1-title">任务维修平均用时</div>
    <div class="blc1-value"><span>55.1</span>小时</div>
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
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 7,
            data: [
              { name: '8小时以内', value: 25, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] },
              { name: '24小时以内', value: 45, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '52%' },
              { name: '48小时以内', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '44%' },
              { name: '72小时以内', value: 35, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '36%' },
              { name: '大于72小时', value: 25, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'], radius: '28%' }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            backgroundArc: {
              show: false
            },
            details: {
              show: true,
              formatter: '{name}',
              position: 'start',
              offset: [-10, 0],
              style: {
                fill: '#fff',
                fontSize: 12,
                textAlign: 'right'
              }
            }
          }
        ]
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
