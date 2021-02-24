<template>
  <div id="manage-page">
    <dv-full-screen-container>
      <div class="main-header">
        <TopHeader></TopHeader>
      </div>
      <div class="main-container">
        <dv-border-box-1>
          <div class="mc-top">
            <div class="mct-left">
              <TopLeftComp></TopLeftComp>
            </div>
            <div class="mct-mid">
              <TopMidComp></TopMidComp>
            </div>
            <div class="mct-right">
              <TopRightComp></TopRightComp>
            </div>
          </div>
          <div class="mc-bottom">
            <div class="mcb-left">
              <dv-border-box-6>
                <div class="mcbl-1">
                  <BottomLeftChart1></BottomLeftChart1>
                </div>
                <dv-decoration-4 class="mcb-decoration-1" style="width:5px;height:45%;" />
                <dv-decoration-4 class="mcb-decoration-2" style="width:5px;height:45%;" />
                <div class="mcbl-2">
                  <BottomLeftChart2></BottomLeftChart2>
                </div>
              </dv-border-box-6>
            </div>
            <div class="mcb-right">
              <div class="mcbr-1">
                <dv-border-box-6>
                  <BottomRightTable1></BottomRightTable1>
                </dv-border-box-6>
              </div>
              <div class="mcbr-2">
                <dv-border-box-6> <BottomRightTable2></BottomRightTable2></dv-border-box-6>
              </div>
              <div class="mcbr-3">
                <dv-border-box-6>
                  <BottomRightTable3></BottomRightTable3>
                </dv-border-box-6>
              </div>
              <div class="mcbr-4">
                <dv-border-box-6>
                  <BottomRightTable4></BottomRightTable4>
                </dv-border-box-6>
              </div>
            </div>
          </div>
        </dv-border-box-1>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import TopHeader from '../components/manage_page/TopHeader'
import TopLeftComp from '../components/manage_page/TopLeftComp'
import TopMidComp from '../components/manage_page/TopMidComp'
import TopRightComp from '../components/manage_page/TopRightComp'
import BottomLeftChart1 from '../components/manage_page/BottomLeftChart1'
import BottomLeftChart2 from '../components/manage_page/BottomLeftChart2'
import BottomRightTable1 from '../components/manage_page/BottomRightTable1'
import BottomRightTable2 from '../components/manage_page/BottomRightTable2'
import BottomRightTable3 from '../components/manage_page/BottomRightTable3'
import BottomRightTable4 from '../components/manage_page/BottomRightTable4'
export default {
  name: 'ManagePage',
  components: {
    TopHeader,
    TopLeftComp,
    TopMidComp,
    TopRightComp,
    BottomLeftChart1,
    BottomLeftChart2,
    BottomRightTable1,
    BottomRightTable2,
    BottomRightTable3,
    BottomRightTable4
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#manage-page {
  #dv-full-screen-container {
    display: flex;
    flex-direction: column;
    background-color: #030409;
    background-image: url('../assets/images/bg-electronic.png');
    color: #fff;

    .main-header {
      height: 80px;
      width: 100%;
    }

    .main-container {
      height: calc(~'100% - 80px');

      .border-box-content {
        padding: 20px;
      }

      .mc-top {
        height: 40%;
        display: flex;
        padding-bottom: 30px;

        .mct-left {
          width: 32%;
        }

        .mct-mid,
        .mct-right {
          width: 34%;
        }
      }

      .mc-bottom {
        height: 60%;
        display: flex;

        .mcb-left {
          width: 32%;
          padding-right: 20px;

          .border-box-content {
            display: flex;

            .mcbl-1 {
              width: 50%;
            }

            .mcbl-2 {
              width: 50%;
            }

            .mcb-decoration-1,
            .mcb-decoration-2 {
              position: absolute;
              left: 50%;
              margin-left: -2px;
            }

            .mcb-decoration-1 {
              top: 5%;
              transform: rotate(180deg);
            }

            .mcb-decoration-2 {
              top: 50%;
            }
          }
        }

        .mcb-right {
          width: 68%;

          display: flex;

          .mcbr-1,
          .mcbr-2,
          .mcbr-3,
          .mcbr-4 {
            width: 25%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
