<template>
  <div id="circle-rotation">
    <div class="circle-container">
      <div class="circle-item circle-1">
        <div class="circle-item circle-2">
          <div class="circle-item circle-3">
            <div class="circle-item circle-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircleRotation',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#circle-rotation {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle-container {
    width: 300px;
    height: 300px;
    display: flex;

    .circle-item {
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .circle-1 {
      height: 300px;
      width: 300px;
      background-image: url('../../assets/images/circle1.png');
    }

    .circle-2 {
      height: 250px;
      width: 250px;
      background-image: url('../../assets/images/circle2.png');
      animation: spin 20s linear infinite;
    }

    .circle-3 {
      height: 140px;
      width: 140px;
      background-image: url('../../assets/images/circle3.png');
      animation: spin 20s linear infinite;
    }

    .circle-4 {
      height: 100px;
      width: 100px;
      background-image: url('../../assets/images/circle4.png');
      animation: spin 20s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(1turn);
      }
    }
  }
}
</style>
