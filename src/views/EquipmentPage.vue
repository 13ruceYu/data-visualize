<template>
  <div id="equipment-page">
    <dv-full-screen-container>
      <div class="page-header">
        <TopHeader></TopHeader>
      </div>
      <div class="page-main">
        <div class="section-top-group">
          <!-- 报警记录 -->
          <WarnScrollBoard></WarnScrollBoard>
        </div>
        <div class="section-middle-group">
          <div class="col manage-count-container">
            <!-- 统计管理 -->
            <ManageCount @showPopup="showPopup"></ManageCount>
          </div>
          <div class="col circle-rotation-container">
            <!-- 中间转的圈圈 -->
            <CircleRotation></CircleRotation>
          </div>
          <div class="col material-count-container">
            <!-- 物资统计 -->
            <MaterialCount></MaterialCount>
          </div>
        </div>
        <div class="section-bottom-group">
          <div class="row">
            <div class="col bar-chart-1">
              <!-- 当年物资使用月统计 -->
              <BarChart1></BarChart1>
            </div>
            <div class="col scroll-board-2">
              <!-- 领用归还记录统计 -->
              <ScrollBoard2></ScrollBoard2>
            </div>
          </div>
          <div class="row">
            <div class="col bar-chart-3">
              <!-- 本周物资使用统计 -->
              <BarChart3></BarChart3>
            </div>
            <div class="col pie-chart-4">
              <!-- 当前总装备库存统计 -->
              <PieChart4></PieChart4>
            </div>
          </div>
        </div>
      </div>
      <PopupBoard :visible="visiblePopupBoard" :popupData="popupData" @closePopup="hidePopup">
        <template class="popup-carousel">
          <a-carousel arrows>
            <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
              <a-icon type="left-circle" />
            </div>
            <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
              <a-icon type="right-circle" />
            </div>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </a-carousel>
        </template>
      </PopupBoard>
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
import PopupBoard from '@/components/equipment_page/PopupBoard'

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
      visiblePopupBoard: false,
      popupData: {}
    }
  },
  methods: {
    showPopup(data) {
      this.popupData = data
      this.visiblePopupBoard = true
    },
    hidePopup() {
      this.visiblePopupBoard = false
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
<style scoped>
/* carousel style */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
