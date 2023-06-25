<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    handleResetFilters(): void {
      this.$store.dispatch('handleClearFilter')
      this.$router.push({ params: { page: '1' } })
      this.$store.dispatch('updateNewsList')
    }
  }
})
</script>

<template>
  <button class="reset-button" @click="handleResetFilters">
    <img src="~static/reset-button-icon.svg" class="icon" draggable="false" />
  </button>
</template>

<style lang="scss" scoped>
.reset-button {
  @include reset-button;
  @include flex-center;

  width: 40px;
  height: 40px;
  background-color: $color-white;

  border-radius: $round-border;
  box-shadow: $default-box-shadow;

  cursor: pointer;

  .icon {
    width: 20px;
    height: 16px;
  }
}
</style>
