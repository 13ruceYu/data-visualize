<template>
  <div id="popup-board" ref="popup_ref">
    <div class="board-container" ref="board_ref">
      <div class="icon-cancel" @click="hideBoard" ref="cancel_ref">
        <img src="../../assets/images/icon-cancel.png" alt="" />
      </div>
      <div class="board-content" ref="board_content_ref">
        <slot :default="popupData"></slot>
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
    popupData: {
      default: () => ({})
    }
  },
  data() {
    return {
      timerId: null
    }
  },
  destroyed() {
    clearTimeout(this.timerId)
  },
  methods: {
    hideBoard() {
      this.$refs.board_content_ref.style.display = 'none'
      this.$refs.cancel_ref.style.opacity = 0
      this.$refs.board_ref.style.width = 1 + 'px'
      this.$refs.board_ref.style.height = 1 + 'px'
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
        this.$refs.board_content_ref.style.display = 'block'
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
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: none;

  .board-mask {
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(30, 182, 254, 0.5);
    display: none;
  }

  .board-container {
    position: absolute;
    height: 1px;
    width: 1px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background: rgba(6, 31, 62, 0.8);
    border: 1px solid rgba(6, 31, 62, 0.8);
    transition: 0.5s width ease-in-out, 0.5s 0.5s height ease-in-out;

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

    .board-content {
      padding: 20px;
      display: none;
    }
  }
}
</style>
