<template>
  <div id="material-count">
    <div class="count-title">物资统计</div>
    <div class="count-block-container">
      <div class="count-block block-1">
        <div class="block-title">当前物资总数</div>
        <div class="block-value">129</div>
      </div>
      <div class="count-block block-2">
        <div class="block-title">在库物资总数</div>
        <div class="block-value">120</div>
      </div>
      <div class="count-block block-3">
        <div class="block-title">当前物资申领数</div>
        <div class="block-value">124</div>
      </div>
      <div class="count-block block-4">
        <div class="block-title">7天内物资申领数</div>
        <div class="block-value">240</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageCount',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
@bdt: solid 1px tomato;
#material-count {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  // justify-content: flex-end;
  position: relative;

  .count-title {
    font-size: 24px;
    color: #2fdaf2;
    padding-left: 60px;
    letter-spacing: 10px;
    margin-top: 30px;
  }

  .count-block-container {
    height: 100%;
    width: 100%;
    position: absolute;

    .count-block {
      position: absolute;
      // border: @bdt;
      width: 180px;
      height: 180px;
      background-size: 100% 100%;
      text-align: center;

      .block-value {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
      }

      .block-title {
        font-size: 20px;
        opacity: 0.8;
        margin-top: 30px;
      }
    }

    .block-1 {
      left: 10%;
      top: 0;
      background-image: url('../../assets/images/box2.png');
    }

    .block-2 {
      right: 20%;
      top: 10%;
      background-image: url('../../assets/images/box1.png');
    }

    .block-3 {
      left: 0%;
      bottom: 0;
      background-image: url('../../assets/images/box2.png');
    }

    .block-4 {
      right: 25%;
      bottom: 5%;
      background-image: url('../../assets/images/box1.png');
    }
  }
}
</style>
