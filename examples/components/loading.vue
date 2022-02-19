<template>
  <div>
    <sw-loading ref="loading"></sw-loading>
  </div>
</template>

<script>
export default {
  name: 'loading',
  mounted () {
    this.$refs.loading.show()
    setTimeout(() => {
      this.$refs.loading.hide()
    }, 4000)
  }
}
</script>

<style lang="scss" scoped>

</style>
