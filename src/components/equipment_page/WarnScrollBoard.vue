<template>
  <div id="warn-scroll-board">
    <div class="board-title">【报警记录】</div>
    <div class="board-container">
      <dv-scroll-board :config="config"></dv-scroll-board>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WarnScrollBoard',
  data() {
    return {
      config: {
        data: [
          ['2021-06-01 18:46:05', '非系统用户刷卡'],
          ['2021-06-02 18:46:05', '轻度警报测试'],
          ['2021-06-04 18:46:05', '中度警报测试'],
          ['2021-06-04 18:46:05', '重度警报测试'],
          ['2021-06-04 18:46:05', '无单警柜对应门'],
          ['2021-06-04 18:46:05', '刷卡失败'],
          ['2021-06-04 18:46:05', '4号门打开失败'],
          ['2021-06-04 18:46:05', '危险操作-1'],
          ['2021-06-04 18:46:05', '危险操作-2']
        ],
        rowNum: 2,
        oddRowBGC: 'rgba(0, 0, 0, 0)',
        evenRowBGC: 'rgba(0, 0, 0, 0)'
      }
    }
  },
  methods: {}
}
</script>

<style lang="less">
#warn-scroll-board {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .board-title {
    width: 20%;
    text-align: right;
    padding-right: 30px;
    color: #30daf2;
  }

  .board-container {
    width: 20%;
    height: 80%;
    .dv-scroll-board {
      height: 100%;
      color: #74c4fb;
    }
  }
}
</style>
