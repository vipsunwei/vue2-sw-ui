<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <sw-loading ref="loading" background-color="rgba(0,0,0,0.7)"></sw-loading> -->
    <loading></loading>
  </div>
</template>

<script>
import loading from './components/loading'
export default {
  name: 'App',
  components: {
    loading
  },
  mounted () {
    // this.$refs.loading.show()
    // setTimeout(() => {
    //   this.hideLoading()
    //   setTimeout(() => {
    //     this.$refs.loading.show()
    //     setTimeout(() => {
    //       this.hideLoading()
    //     }, 3000)
    //   }, 1000)
    // }, 3000)
  },
  methods: {
    hideLoading (e) {
      this.$refs.loading.hide()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
