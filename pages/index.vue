<script>
export default {
  data() {
    return {
      type: 'tiles'
    }
  },
  mounted() {
    this.type = localStorage.getItem('NewsOutputType')
    window.addEventListener('news-output-type-localstorage-changed', event => {
      this.type = event.detail.storage
    })
  }
}
</script>

<template>
  <main class="main">
    <TheFilters />
    <TheNewsList :type="$data.type" />
    <ThePagination />
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin-top: 25px;

  @include desktop-xxl {
    width: 1440px;
  }

  @include desktop-xl {
    min-width: 1280px;
    width: 80%;
  }

  @include desktop {
    min-width: 1000px;
    max-height: 1440px;
    width: 90%;
  }
}
</style>
