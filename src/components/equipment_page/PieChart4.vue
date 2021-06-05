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
            @click="showPopupBoard(item)"
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
    <PopupBoard
      v-show="popupBoardVisible"
      :visible="popupBoardVisible"
      :popupData="popupBoardData"
      @closePopup="hidePopup"
    >
      <template v-slot:default="slotProps">
        <div class="popup-title">{{ slotProps.default.popupTitle }}</div>
        <table class="popup-table">
          <thead>
            <th v-for="(item, i) in slotProps.default.tHead" :key="i">{{ item }}</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in slotProps.default.tBody" :key="index">
              <td v-for="(val, key, i) in item" :key="i">{{ val }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </PopupBoard>
  </div>
</template>

<script>
import PopupBoard from './PopupBoard'
export default {
  name: 'PieChart4',
  components: { PopupBoard },
  data() {
    return {
      popupBoardVisible: false,
      popupBoardData: {},
      dataName: ['姓名', '年龄', '性别'],
      // 图标数据
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
            // roseType: true,
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
  methods: {
    showPopupBoard(data) {
      this.popupBoardVisible = true
      this.popupBoardData = {
        tHead: this.dataName,
        tBody: data.detail,
        popupTitle: data.name
      }
    },
    hidePopup() {
      this.popupBoardVisible = false
    }
  }
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
        margin-top: -12px;
        width: 50%;
        height: 100%;
      }
    }
  }

  .popup-title {
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .popup-table {
    width: 100%;
    font-size: 16px;

    thead {
      border-bottom: 1px solid #fff;
      th {
        padding-bottom: 10px;
      }
    }

    th,
    td {
      text-align: center;
    }

    td {
      padding-top: 10px;
    }
  }
}
</style>
