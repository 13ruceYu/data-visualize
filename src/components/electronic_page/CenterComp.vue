<template>
  <div id="center-comp">
    <div class="cc-header">
      <dv-decoration-1 style="width: 200px; height: 50px"></dv-decoration-1>
      <div>机电设备总数</div>
      <dv-decoration-1 style="width: 200px; height: 50px"></dv-decoration-1>
    </div>

    <div class="cc-details">
      <div>设备总数</div>
      <div class="card">2</div>
      <div class="card">2</div>
      <div class="card">2</div>
      <div class="card">2</div>
    </div>

    <div class="cc-main-container">
      <div class="ccmc-left">
        <div class="station-info">收费站<span>1315</span></div>
        <div class="station-info">监控中心<span>415</span></div>
      </div>
      <dv-active-ring-chart class="ccmc-middle" :config="config"></dv-active-ring-chart>
      <div class="ccmc-right">
        <div class="station-info"><span>1315</span>道路外场</div>
        <div class="station-info"><span>415</span>其他</div>
      </div>
    </div>
    <LabelTag :config="labelConfig"></LabelTag>
  </div>
</template>

<script>
import LabelTag from './LabelTag'
export default {
  name: 'CenterComp',
  components: { LabelTag },
  data() {
    return {
      config: {
        data: [
          {
            name: '收费站',
            value: 1315
          },
          {
            name: '监控中心',
            value: 415
          },
          {
            name: '道路外场',
            value: 90
          },
          {
            name: '其他',
            value: 317
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        lineWidth: 30,
        radius: '55%',
        activeRadius: '60%'
      },

      labelConfig: {
        data: ['收费站', '监控中心', '道路外场', '其他']
      }
    }
  },
  methods: {}
}
</script>

<style lang="less">
#center-comp {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  .cc-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28px;
  }

  .cc-details {
    height: 120px;
    display: flex;
    justify-content: center;
    font-size: 24px;
    align-items: center;

    .card {
      background-color: rgba(4, 49, 128, 0.6);
      color: #08e5ff;
      height: 70px;
      width: 70px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 10px;
    }
  }

  .cc-main-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    flex: 1;
    align-items: center;

    .ccmc-middle {
      width: 50%;
      height: 100%;

      .active-ring-name {
        font-size: 20px !important;
      }
    }

    .ccmc-left,
    .ccmc-right {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 20px;

      .station-info {
        height: 80px;
        display: flex;
        align-items: center;

        span {
          font-size: 40px;
          font-weight: bold;
        }
      }
    }

    .ccmc-left {
      span {
        margin-left: 20px;
      }
    }

    .ccmc-right {
      span {
        margin-right: 20px;
      }
    }
  }
}
</style>
