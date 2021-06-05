<template>
  <div id="scroll-board-2">
    <dv-border-box-12>
      <div class="board-title">
        ● 领用归还记录统计
      </div>
      <div class="board-container">
        <dv-scroll-board :config="config"></dv-scroll-board>
      </div>
    </dv-border-box-12>
  </div>
</template>

<script>
export default {
  name: 'ScrollBoard2',
  components: {},
  data() {
    return {
      config: {
        header: ['时间', '数量', '状态', '用户'],
        data: [
          ['2021-05-28 18:46:05', '12', '入库成功', 'whh'],
          ['2021-05-29 18:46:05', '12', '入库成功', 'zks'],
          ['2021-05-29 18:46:05', '12', '入库成功', 'wtz'],
          ['2021-05-29 18:46:05', '12', '入库成功', 'lgd'],
          ['2021-05-30 18:46:05', '12', '入库成功', 'zhl'],
          ['2021-05-31 18:46:05', '12', '入库成功', 'yhb'],
          ['2021-06-01 18:46:05', '12', '入库成功', 'wgc'],
          ['2021-06-02 18:46:05', '12', '入库成功', 'gly'],
          ['2021-06-03 18:46:05', '12', '入库成功', 'ypf']
        ],
        oddRowBGC: 'rgba(0, 0, 0, 0)',
        evenRowBGC: 'rgba(0, 0, 0, 0)',
        headerBGC: 'rgb(10 39 78)',
        align: [2]
      }
    }
  },
  methods: {}
}
</script>

<style lang="less">
#scroll-board-2 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .border-box-content {
    padding: 10px;
  }

  .board-title {
    height: 20px;
    font-size: 14px;
    margin-bottom: 5px;
    color: #2fdaf2;
  }

  .board-container {
    height: calc(~'100% - 25px');

    .dv-scroll-board {
      height: 100%;
      color: #74c4fb;
    }
  }
}
</style>
