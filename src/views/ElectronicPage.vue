<template>
  <div id="electronic-page">
    <dv-full-screen-container>
      <div class="main-header">
        <TopHeader></TopHeader>
      </div>
      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="mc-left">
          <LeftChart1></LeftChart1>
          <LeftChart2></LeftChart2>
          <LeftChart3></LeftChart3>
        </dv-border-box-3>
        <div class="mc-right">
          <div class="mcr-top">
            <div class="mcrt-left">
              <dv-border-box-3>
                <CenterComp></CenterComp>
              </dv-border-box-3>
            </div>
            <div class="mcrt-right">
              <div class="mcrtr-top">
                <dv-border-box-3>
                  <RightChart1></RightChart1>
                </dv-border-box-3>
              </div>
              <div class="mcrtr-bottom">
                <dv-border-box-4 :reverse="true">
                  <RightChart2></RightChart2>
                </dv-border-box-4>
              </div>
            </div>
          </div>
          <div class="mcr-bottom">
            <dv-border-box-4>
              <BottomCharts></BottomCharts>
            </dv-border-box-4>
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import TopHeader from '../components/electronic_page/TopHeader'
import LeftChart1 from '../components/electronic_page/LeftChart1'
import LeftChart2 from '../components/electronic_page/LeftChart2'
import LeftChart3 from '../components/electronic_page/LeftChart3'
import CenterComp from '../components/electronic_page/CenterComp'
import RightChart1 from '../components/electronic_page/RightChart1'
import RightChart2 from '../components/electronic_page/RightChart2'
import BottomCharts from '../components/electronic_page/BottomCharts'
export default {
  name: 'ElectronicPage',
  components: { TopHeader, LeftChart1, LeftChart2, LeftChart3, CenterComp, RightChart1, RightChart2, BottomCharts },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#electronic-page {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('../assets/images/bg-electronic.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 3px blue;

    .main-header {
      display: flex;
      height: 80px;
    }

    .main-container {
      height: calc(~'100% - 80px');

      .border-box-content {
        padding: 20px;
        display: flex;

        .mc-left {
          width: 22%;
          .border-box-content {
            flex-direction: column;
          }
        }

        .mc-right {
          width: 78%;

          .mcr-top {
            height: 65%;
            display: flex;

            .mcrt-left {
              width: 65%;
            }

            .mcrt-right {
              width: 35%;

              .mcrtr-top,
              .mcrtr-bottom {
                height: 50%;
              }
            }
          }

          .mcr-bottom {
            height: 35%;
          }
        }
      }
    }
  }
}
</style>
