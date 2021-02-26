<template>
  <div id="bar-chart-1">
    <dv-border-box-12>
      <div class="chart-container">
        <dv-charts :option="option"></dv-charts>
      </div>
    </dv-border-box-12>
  </div>
</template>

<script>
export default {
  name: 'BarChart1',
  data() {
    return {
      option: {
        title: {
          text: '本周物资使用统计',
          style: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: ['10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07'],
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: true
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: true
          },
          min: 0,
          max: 8
        },
        series: [
          {
            name: '收费系统',
            data: [2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5],
            type: 'bar',
            barStyle: {
              fill: 'rgba(0, 186, 255, 0.4)'
            },
            label: {
              show: true,
              textStyle: {
                color: 'white'
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
#bar-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .chart-container {
    height: 100%;
  }
}
</style>
