<template>
  <div id="popup-board" ref="popup_ref">
    <div class="board-container" ref="board_ref">
      <div class="icon-cancel" @click="hideBoard" ref="cancel_ref">
        <img src="../../assets/images/icon-cancel.png" alt="" />
      </div>
      <div class="board-table" ref="table_ref">
        <table>
          <thead>
            <th v-for="(item, i) in tHeadData" :key="i">{{ item }}</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tBodyData" :key="index">
              <td v-for="(key, val, i) in item" :key="i">{{ val }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="board-mask" ref="mask_ref"></div>
  </div>
</template>

<script>
export default {
  name: 'PopupBoard',
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    detail: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      timerId: null,
      tHeadData: null,
      tBodyData: null
    }
  },
  mounted() {
    this.tBodyData = this.detail[0]
    this.tHeadData = this.detail[1]
    this.openBoard()
  },
  destroyed() {
    clearTimeout(this.timerId)
  },
  methods: {
    hideBoard() {
      this.$refs.table_ref.style.display = 'none'
      this.$refs.cancel_ref.style.opacity = 0
      this.$refs.board_ref.style.width = 2 + 'px'
      this.$refs.board_ref.style.height = 0
      this.timerId = setTimeout(() => {
        this.$refs.mask_ref.style.display = 'none'
        this.$refs.popup_ref.style.display = 'none'
        clearTimeout(this.timerId)
        this.$emit('closePopup')
      }, 1000)
    },
    openBoard() {
      this.$refs.popup_ref.style.display = 'block'
      this.$refs.mask_ref.style.display = 'block'
      setTimeout(() => {
        this.$refs.board_ref.style.width = 50 + '%'
        this.$refs.board_ref.style.height = 50 + '%'
      }, 0)
      setTimeout(() => {
        this.$refs.cancel_ref.style.opacity = 1
        this.$refs.table_ref.style.display = 'block'
      }, 1000)
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.openBoard()
      } else {
        this.hideBoard()
      }
    }
  }
}
</script>

<style lang="less">
#popup-board {
  height: 100%;
  width: 100%;
  position: absolute;
  display: none;

  .board-mask {
    z-index: 99;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(30, 182, 254, 0.5);
    display: none;
  }

  .board-container {
    position: absolute;
    height: 0;
    width: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background: rgba(6, 31, 62, 0.8);
    transition: 0.5s width ease-in-out, 0.5s 0.5s height ease-in-out;
    border: 1px solid rgba(6, 31, 62, 0.8);

    .icon-cancel {
      width: 34px;
      height: 34px;
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(50%, -50%);
      opacity: 0;

      img {
        max-width: 100%;
      }
    }

    .board-table {
      padding: 20px;
      display: none;

      table {
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
  }
}
</style>
