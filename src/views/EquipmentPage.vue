<template>
  <div id="equipment-page">
    <dv-full-screen-container>
      <PopupBoard
        v-if="popupBoardVisible"
        :visible="popupBoardVisible"
        :detail="dataDetail"
        @closePopup="hidePopup"
      ></PopupBoard>
      <div class="page-header">
        <TopHeader></TopHeader>
      </div>
      <div class="page-main">
        <div class="section-top-group">
          <WarnScrollBoard></WarnScrollBoard>
        </div>
        <div class="section-middle-group">
          <div class="col manage-count-container">
            <ManageCount></ManageCount>
          </div>
          <div class="col circle-rotation-container">
            <CircleRotation></CircleRotation>
          </div>
          <div class="col material-count-container">
            <MaterialCount></MaterialCount>
          </div>
        </div>
        <div class="section-bottom-group">
          <div class="row">
            <div class="col bar-chart-1">
              <BarChart1></BarChart1>
            </div>
            <div class="col scroll-board-2">
              <ScrollBoard2></ScrollBoard2>
            </div>
          </div>
          <div class="row">
            <div class="col bar-chart-3">
              <BarChart3></BarChart3>
            </div>
            <div class="col pie-chart-4">
              <PieChart4 @showDetail="showPopup(arguments)"></PieChart4>
            </div>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import TopHeader from '../components/equipment_page/TopHeader'
import WarnScrollBoard from '../components/equipment_page/WarnScrollBoard'
import ManageCount from '../components/equipment_page/ManageCount'
import MaterialCount from '../components/equipment_page/MaterialCount'
import CircleRotation from '../components/equipment_page/CircleRotation'
import BarChart1 from '../components/equipment_page/BarChart1'
import ScrollBoard2 from '../components/equipment_page/ScrollBoard2'
import BarChart3 from '../components/equipment_page/BarChart3'
import PieChart4 from '../components/equipment_page/PieChart4'
import PopupBoard from '../components/equipment_page/PopupBoard'
export default {
  name: 'EquipmentPage',
  components: {
    TopHeader,
    WarnScrollBoard,
    ManageCount,
    MaterialCount,
    CircleRotation,
    BarChart1,
    ScrollBoard2,
    BarChart3,
    PieChart4,
    PopupBoard
  },
  data() {
    return {
      popupBoardVisible: false,
      dataDetail: null
    }
  },
  methods: {
    showPopup(detail) {
      this.popupBoardVisible = true
      this.dataDetail = [detail[0], detail[1]]
    },
    hidePopup() {
      this.popupBoardVisible = false
    }
  }
}
</script>

<style lang="less">
@bdt: solid 0px tomato;
#equipment-page {
  #dv-full-screen-container {
    background-image: url('../assets/images/center.png');
    background-color: #030409;
    background-repeat: no-repeat;
    color: #fff;
    display: flex;
    flex-direction: column;

    .page-header {
      height: 70px;
      margin-top: 20px;
    }

    .page-main {
      border: @bdt;
      height: calc(~'100% - 90px');
      display: flex;
      flex-direction: column;

      .section-top-group {
        border: @bdt;
        height: 5%;
      }

      .section-middle-group {
        border: @bdt;
        height: 50%;
        display: flex;
        justify-content: space-around;

        .col {
          border: @bdt;
        }

        .manage-count-container,
        .material-count-container {
          width: 30%;
        }

        .circle-rotation-container {
          width: 20%;
        }
      }

      .section-bottom-group {
        border: @bdt;
        height: 45%;
        display: flex;
        flex-direction: column;
        padding: 30px 80px;

        .row {
          border: @bdt;
          height: 50%;
          display: flex;
          justify-content: space-between;

          .col {
            border: @bdt;
            width: 50%;
          }
        }
      }
    }
  }
}
</style>
