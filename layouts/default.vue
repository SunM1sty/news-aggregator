<script>
export default {
  watch: {
    $route: {
      handler(to) {
        this.$store.dispatch('handleFilteredNews', to.query)
      },
      immediate: true
    }
  },
  async beforeMount() {
    await this.$store.dispatch('fetchNews')
    this.$store.dispatch('handleFilteredNews', this.$route.query)
  }
}
</script>

<template>
  <div class="page-content">
    <TheHeader />
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.page-content {
  @include flex-v-center;
  flex-direction: column;
  padding: 0 15px;
}
</style>
