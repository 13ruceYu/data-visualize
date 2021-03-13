<template>
  <div class="home">
    <h1>home</h1>
    <router-link to="/screenpage">screen-page</router-link><br />
    <router-link to="/electronicpage">electronic-page</router-link><br />
    <router-link to="/constructionpage">construction-page</router-link><br />
    <router-link to="/managepage">manage-page</router-link><br />
    <router-link to="/equipmentpage">equipment-page</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e)
      this.visible = false
    }
  }
}
</script>
