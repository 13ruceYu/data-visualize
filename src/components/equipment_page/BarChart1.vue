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
          text: '当年物资使用月度统计',
          style: {
            fill: '#fff'
          }
        },
        legend: {
          data: [
            {
              name: '收费系统',
              color: '#00baff'
            },
            {
              name: '监控系统',
              color: '#ff5ca9'
            },
            {
              name: '通信系统',
              color: '#3de7c9'
            },
            {
              name: '供配电系统',
              color: '#f5d94e'
            }
          ],
          textStyle: {
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
            show: false
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
            show: false
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
            }
          },
          {
            name: '监控系统',
            data: [2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5],
            type: 'line',
            lineStyle: {
              stroke: '#ff5ca9'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#ff5ca9',
                stroke: 'transparent'
              }
            }
          },
          {
            name: '通信系统',
            data: [1.3, 2.3, 5.3, 5.3, 6.3, 5.3, 1.3],
            type: 'line',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            lineStyle: {
              lineDash: [5, 5]
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          },
          {
            data: [0.2, 1.2, 4.2, 4.2, 5.2, 4.2, 0.2],
            type: 'line',
            name: '供配电系统',
            lineArea: {
              show: true,
              gradient: ['rgba(245, 217, 79, 0.8)', 'rgba(245, 217, 79, 0.2)']
            },
            lineStyle: {
              stroke: '#f5d94e'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#f5d94e',
                stroke: 'transparent'
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
