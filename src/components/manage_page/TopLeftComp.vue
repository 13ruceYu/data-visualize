<template>
  <div id="top-left-comp">
    <div class="tlc-left">
      <div class="tlc-chart">
        <dv-border-box-5>
          <div class="main-value"><span>0</span>件</div>
          <div class="compare-value"><span>同比</span>81</div>
          <div class="compare-value"><span>环比</span>15</div>
        </dv-border-box-5>
      </div>
      <div class="tlc-title">
        运维人均工作量
        <dv-decoration-3></dv-decoration-3>
      </div>
    </div>
    <div class="tlc-right">
      <div class="tlc-title">
        当月维修任务量
        <dv-decoration-3></dv-decoration-3>
      </div>
      <div class="tlc-chart">
        <dv-border-box-5 :reverse="true">
          <div class="main-value"><span>0.1</span>件 / 日</div>
          <div class="compare-value"><span>同比</span>66</div>
          <div class="compare-value"><span>环比</span>9</div>
        </dv-border-box-5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopLeftComp',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#top-left-comp {
  width: 100%;
  height: 100%;
  display: flex;

  .tlc-left,
  .tlc-right {
    width: 50%;
    .tlc-title {
      display: flex;
      flex-direction: column;
      padding: 20px;
      height: 40%;
      .dv-decoration-3 {
        margin-left: -4px;
        height: 20px;
        width: 200px;
      }
    }
    .tlc-chart {
      height: 60%;
      .dv-border-box-5 {
        height: 100%;
        .main-value {
          font-weight: bold;
          font-size: 30px;

          span {
            font-size: 50px;
            color: #00c0ff;
            margin-right: 15px;
          }
        }

        .compare-value {
          height: 35px;
          line-height: 35px;
          font-size: 18px;

          span {
            margin-right: 30px;
          }
        }
      }
    }
  }

  .tlc-left {
    .dv-border-box-5 {
      padding: 30px;
    }
  }

  .tlc-right {
    .dv-border-box-5 {
      padding: 40px;
    }
  }
}
</style>
