<template>
  <div id="pie-chart-4">
    <dv-border-box-12>
      <div class="chart-title">
        ● 当前总装备库存统计
      </div>
      <div class="chart-container">
        <div class="legend-container">
          <div
            class="legend-item"
            v-for="(item, index) in option.series[0].data"
            :key="item.name"
            @click="$emit('showDetail', item.detail, dataName)"
          >
            <span class="legend-icon" :style="{ background: option.color[index] }">{{ item.value }}</span>
            <span class="legend-text">{{ item.name }}</span>
          </div>
        </div>
        <div class="chart-main">
          <dv-charts :option="option"></dv-charts>
        </div>
      </div>
    </dv-border-box-12>
  </div>
</template>

<script>
export default {
  name: 'PieChart4',
  data() {
    return {
      dataName: ['姓名', '年龄', '性别'],
      option: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '民警作战背心', value: 3, detail: [{ name: 'whh', age: '13', gender: 'male' }] },
              { name: '护目镜', value: 9 },
              { name: '非金属防弹头盔', value: 9 },
              { name: '抓捕网', value: 12 },
              { name: '防毒面具', value: 6 },
              { name: 'PC盾牌', value: 18 }
            ],
            roseType: true,
            outsideLabel: {
              show: false
            },
            radius: '100%'
          }
        ],
        color: ['rgba(145, 204, 117, 0.5)', '#5470c6', '#73c0de', '#ee6666', 'rgba(250, 200, 88, .6)', '#41b783']
      }
    }
  },
  methods: {}
}
</script>

<style lang="less">
#pie-chart-4 {
  height: 100%;
  width: 100%;

  .border-box-content {
    padding: 10px;

    .chart-title {
      height: 20px;
      font-size: 14px;
      margin-bottom: 5px;
      color: #2fdaf2;
    }

    .chart-container {
      display: flex;
      height: calc(~'100% - 20px');

      .legend-container {
        width: 50%;
        padding-left: 20px;
        padding-top: 24px;

        .legend-item {
          width: 33.3%;
          float: left;
          margin-bottom: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;

          .legend-text {
            display: inline-block;
            margin-top: -2px;
          }

          .legend-icon {
            width: 24px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            display: inline-block;
            border-radius: 50%;
            margin-right: 8px;
          }
        }
      }

      .chart-main {
        width: 50%;
        height: 100%;
      }
    }
  }
}
</style>
